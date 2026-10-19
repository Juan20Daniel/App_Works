// import { CreateCompanyInput, validateData } from './companyUseCase';

// describe('CompanyUseCase', () => {
//     test('Verifica de forma correcta con datos correctos', async () => {
//         const data:CreateCompanyInput = {
//             companyLogo:'wedewdewffdsfsdfsfhyjuyjotijgojdovmoasasafcazzxvvsmlklosoqwe',
//             companyName:'Cosmeticos',
//             companyDesc:'Somos expertos en manjeo de cosmeticos a nivel mundial.'
//         }

//         const result = validateData(data);

//         expect(result).toBeTruthy();
//     });
//     test('Lanza error de forma correcta con datos invalidos', async () => {
//         const data:CreateCompanyInput = {
//             companyLogo:'wedewdewf',
//             companyName:'A',
//             companyDesc:'Emte'
//         }

//         expect(() => validateData(data))
//         .toThrow('Error en los campos: companyLogo, companyName, companyDesc.')
//     });
// });