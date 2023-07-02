
export interface UserInfo {
  enterpriseId: string;
  regions: string[];
  roles: string[];
  avatar: string;
}

export interface AppIdentity {
  authToken: string;
  isAuthenticated: boolean;
  claims: {
    type: string;
    value: string
  }[];
}

export interface AuthInfo {
  userInfo: UserInfo;
  identity: AppIdentity;
}

export interface MenuItem {
  label: string;
  visible: boolean;
  router: string;
}

export interface MenuItems {
  landingPage: MenuItem;
  dataEntry: MenuItem;
  kpiStatistics: MenuItem;
  equipmentStatistics: MenuItem;
  performanceInsight: MenuItem;
  protean: MenuItem;
  piVision: MenuItem;
  userManagement: MenuItem;
  equipmentManagement: MenuItem;
  dataManagement: MenuItem;
}

export interface ListRoleViews {
  landingPageViewable: boolean;
  dataEntryViewable: boolean;
  dataEntryEditable: boolean;
  kpiStatisticsViewable: boolean;
  equipmentStatisticsViewable: boolean;
  performanceInsightViewable: boolean;
  proteanViewable: boolean;
  piVisionViewable: boolean;
  userManagementViewable: boolean;
  equipmentManagementViewable: boolean;
  dataManagementViewable: boolean;
  dataManagementEditable: boolean;
}
