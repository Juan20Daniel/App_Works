import { StyleSheet, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { BtnIcon } from '@/presentation/components/ui/btnIcon/BtnIcon';

import { publicationStyles } from '../styles';
import { UserAvatar } from '@/presentation/components/user';
import { useVisibleModalPublicOpStore } from '@/presentation/store';

export const UserInfo = () => {
  const mountModalOptions = useVisibleModalPublicOpStore((state) => state.open);
  return (
    <View style={styles.container}>
      <UserAvatar username='Carlos Manuel Hernandes Chavez' />
      <View style={styles.boxUserData}>
        <View style={styles.userData}>
          <Text style={styles.nameUser} numberOfLines={3}>
            Carlos Manuel Hernandes Chavez
          </Text>
          <Text style={styles.textDate}>Fecha de publicación: 02/09/2023</Text>
        </View>
        <BtnIcon
          iconName='More'
          iconColor={globalColors.gray}
          action={() => mountModalOptions()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
    ...publicationStyles.rowCenter,
  },
  boxUserData: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userData: {
    gap:10
  },
  nameUser: {
    width: 180,
    fontSize: 12,
    fontFamily: globalStyles.fontMonserratMedium
  },
  textDate: {
    fontSize: 9,
    color: globalColors.darkGray,
    fontFamily: globalStyles.fontMonserratMedium
  }
});