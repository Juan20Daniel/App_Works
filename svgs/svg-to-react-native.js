#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Función para convertir kebab-case a camelCase
function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

// Función para convertir el nombre del archivo a PascalCase
function toPascalCase(str) {
  const name = path.basename(str, '.svg');
  return name
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function convertSvgToReactNative(svgPath) {
  const svgContent = fs.readFileSync(svgPath, 'utf8');
  
  // Extraer viewBox
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
  
  // Extraer el contenido dentro del <svg>
  const svgBodyMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  if (!svgBodyMatch) {
    throw new Error('No se encontró elemento SVG válido');
  }
  
  let svgBody = svgBodyMatch[1];
  
  // Convertir atributos a camelCase
  svgBody = svgBody.replace(/stroke-width/g, 'strokeWidth');
  svgBody = svgBody.replace(/stroke-linecap/g, 'strokeLinecap');
  svgBody = svgBody.replace(/stroke-linejoin/g, 'strokeLinejoin');
  svgBody = svgBody.replace(/fill-rule/g, 'fillRule');
  svgBody = svgBody.replace(/clip-rule/g, 'clipRule');
  svgBody = svgBody.replace(/stroke-dasharray/g, 'strokeDasharray');
  svgBody = svgBody.replace(/fill-opacity/g, 'fillOpacity');
  svgBody = svgBody.replace(/stroke-opacity/g, 'strokeOpacity');
  
  // Cambiar tags a mayúsculas
  svgBody = svgBody.replace(/<path/g, '<Path');
  svgBody = svgBody.replace(/<\/path>/g, '</Path>');
  svgBody = svgBody.replace(/<g/g, '<G');
  svgBody = svgBody.replace(/<\/g>/g, '</G>');
  svgBody = svgBody.replace(/<circle/g, '<Circle');
  svgBody = svgBody.replace(/<\/circle>/g, '</Circle>');
  svgBody = svgBody.replace(/<rect/g, '<Rect');
  svgBody = svgBody.replace(/<\/rect>/g, '</Rect>');
  svgBody = svgBody.replace(/<line/g, '<Line');
  svgBody = svgBody.replace(/<\/line>/g, '</Line>');
  svgBody = svgBody.replace(/<ellipse/g, '<Ellipse');
  svgBody = svgBody.replace(/<\/ellipse>/g, '</Ellipse>');
  svgBody = svgBody.replace(/<polygon/g, '<Polygon');
  svgBody = svgBody.replace(/<\/polygon>/g, '</Polygon>');
  svgBody = svgBody.replace(/<polyline/g, '<Polyline');
  svgBody = svgBody.replace(/<\/polyline>/g, '</Polyline>');
  
  // Reemplazar colores con props.color (pero mantener none)
  svgBody = svgBody.replace(/stroke="([^"]+)"/g, (match, color) => {
    return color === 'none' ? 'stroke="none"' : 'stroke={props.color}';
  });
  svgBody = svgBody.replace(/fill="([^"]+)"/g, (match, color) => {
    return color === 'none' ? 'fill="none"' : 'fill={props.color}';
  });
  
  // Detectar si necesita G wrapper con stroke
  const needsWrapper = !svgBody.includes('<G');
  const hasStroke = svgContent.includes('stroke=') && !svgContent.includes('stroke="none"');
  
  if (needsWrapper && hasStroke) {
    svgBody = `      <G stroke={props.color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
${svgBody.split('\n').map(line => '  ' + line).join('\n')}
      </G>`;
  }
  
  // Indentar correctamente
  svgBody = svgBody.split('\n').map(line => line.trim() ? '      ' + line.trim() : '').join('\n');
  
  // Nombre del componente
  const componentName = 'Svg' + toPascalCase(svgPath);
  
  // Identificar componentes usados
  const usedComponents = new Set(['Svg', 'SvgProps']);
  if (svgBody.includes('<G')) usedComponents.add('G');
  if (svgBody.includes('<Path')) usedComponents.add('Path');
  if (svgBody.includes('<Circle')) usedComponents.add('Circle');
  if (svgBody.includes('<Rect')) usedComponents.add('Rect');
  if (svgBody.includes('<Line')) usedComponents.add('Line');
  if (svgBody.includes('<Ellipse')) usedComponents.add('Ellipse');
  if (svgBody.includes('<Polygon')) usedComponents.add('Polygon');
  if (svgBody.includes('<Polyline')) usedComponents.add('Polyline');
  
  const imports = Array.from(usedComponents).sort().join(', ');
  
  // Generar el componente
  const component = `import React from 'react';
import { ${imports} } from 'react-native-svg';

function ${componentName}({ ...props }: SvgProps) {
  if (!props.width) props.width = 24;
  if (!props.height) props.height = 24;
  
  return (
    <Svg viewBox="${viewBox}" fill="none" {...props}>
${svgBody}
    </Svg>
  );
}

export default React.memo(${componentName});`;
  
  return component;
}

// Función para procesar múltiples archivos
function processMultipleSvgs(inputDir, outputDir) {
  // Crear carpeta de salida si no existe
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Leer todos los archivos SVG
  const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.svg'));
  
  if (files.length === 0) {
    console.log('⚠️  No se encontraron archivos SVG en la carpeta input');
    return;
  }
  
  console.log(`\n🔍 Encontrados ${files.length} archivos SVG\n`);
  
  let successCount = 0;
  let errorCount = 0;
  
  files.forEach(file => {
    const inputPath = path.join(inputDir, file);
    const outputFileName = file.replace('.svg', '.tsx');
    const outputPath = path.join(outputDir, outputFileName);
    
    try {
      const component = convertSvgToReactNative(inputPath);
      fs.writeFileSync(outputPath, component);
      console.log(`✅ ${file} → ${outputFileName}`);
      successCount++;
    } catch (error) {
      console.error(`❌ Error con ${file}: ${error.message}`);
      errorCount++;
    }
  });
  
  console.log(`\n📊 Resultado:`);
  console.log(`   ✅ ${successCount} archivos convertidos`);
  if (errorCount > 0) {
    console.log(`   ❌ ${errorCount} errores`);
  }
  console.log(`   📁 Guardados en: ${outputDir}\n`);
}

// Ejecutar si se llama directamente
if (require.main === module) {
  const args = process.argv.slice(2);
  
  // Si no hay argumentos, procesar carpetas por defecto
  if (args.length === 0) {
    // Buscar carpetas input/output en el directorio actual
    const baseDir = __dirname;
    const inputDir = path.join(baseDir, 'input');
    const outputDir = path.join(baseDir, 'output');
    
    // Si existe la carpeta input, procesarla
    if (fs.existsSync(inputDir)) {
      console.log('🚀 Convirtiendo todos los SVGs de input/ a output/...');
      processMultipleSvgs(inputDir, outputDir);
    } else {
      console.log('\n📋 USO DEL SCRIPT:');
      console.log('────────────────────────────');
      console.log('\nOpción 1: Convertir todos los SVGs (desde carpeta svgs/):');
      console.log('  npm run svg\n');
      console.log('Opción 2: Convertir un archivo específico:');
      console.log('  node svgs/svg-to-react-native.js input/archivo.svg\n');
      console.log('Estructura esperada:');
      console.log('  svgs/');
      console.log('    ├── svg-to-react-native.js');
      console.log('    ├── input/');
      console.log('    │   ├── user.svg');
      console.log('    │   └── home.svg');
      console.log('    └── output/');
      console.log('        ├── user.tsx');
      console.log('        └── home.tsx\n');
    }
  } else if (args.length === 1) {
    // Un argumento: archivo SVG individual
    const inputPath = args[0];
    
    if (inputPath.endsWith('.svg')) {
      const outputPath = inputPath.replace('.svg', '.tsx').replace('input/', 'output/');
      const outputDir = path.dirname(outputPath);
      
      // Crear directorio de salida si no existe
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      if (!fs.existsSync(inputPath)) {
        console.error(`❌ Error: No se encuentra el archivo ${inputPath}`);
        process.exit(1);
      }
      
      try {
        const component = convertSvgToReactNative(inputPath);
        fs.writeFileSync(outputPath, component);
        console.log(`✅ Componente creado: ${outputPath}`);
      } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
      }
    } else {
      // Es una carpeta
      const inputDir = args[0];
      const outputDir = inputDir.replace('input', 'output');
      processMultipleSvgs(inputDir, outputDir);
    }
  } else if (args.length === 2) {
    // Dos argumentos: carpetas de entrada y salida personalizadas
    const inputDir = args[0];
    const outputDir = args[1];
    processMultipleSvgs(inputDir, outputDir);
  }
}

module.exports = { convertSvgToReactNative, processMultipleSvgs };