interface MenuItem {
  header?: string;
  name?: string;
  to?: { name: string };
  icon?: string;
  divider?: boolean;
}

const mainMenuItems: MenuItem[] = [
  { name: 'Dashboard', to: { name: 'dashboard' }, icon: 'fas fa-home me-2' },
];

const settingsMenuItems: MenuItem[] = [
  { name: 'User Profile', to: { name: 'userProfile' }, icon: 'fas fa-user me-2' },
  { name: 'User Management', to: { name: 'userManagement' }, icon: 'fas fa-users me-2' },
  { name: 'Role Management', to: { name: 'roleManagement' }, icon: 'fas fa-users me-2' },
];

export const useMenuItemsStore = defineStore('menuItems', {
  state: () => ({
    menu: [
      { header: 'Main Menu' },
      ...mainMenuItems,
      { divider: true },
      { header: 'Settings' },
      ...settingsMenuItems,
    ]
  })
});