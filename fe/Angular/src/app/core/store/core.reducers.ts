import * as CoreActions from './core.actions';
import { UserInfo, AppIdentity, MenuItems, ListRoleViews } from './core.models';

export interface State {
  redirectLinkWhenLoginSuccess: string;
  userInfo: UserInfo;
  identity: AppIdentity;
  menuItems: MenuItems;
  roleViews: ListRoleViews;
}

const initialState: State = {
  redirectLinkWhenLoginSuccess: '/landing-page',
  userInfo: {
    avatar: '',
    enterpriseId: '',
    roles: [],
    regions: []
  },
  identity: {
    isAuthenticated: false,
    authToken: '',
    claims: []
  },
  menuItems: {
    landingPage: {
      label: 'Landing Page',
      visible: false,
      router: '/landing-page'
    },
    dataEntry: {
      label: 'Data Entry',
      visible: false,
      router: '/data-entry'
    },
    kpiStatistics: {
      label: 'KPI Statistics',
      visible: false,
      router: '/kpi-statistics'
    },
    dataManagement: {
      label: 'Data Management',
      visible: false,
      router: '/data-management'

    },
    equipmentManagement: {
      label: 'Equipment Management',
      visible: false,
      router: '/equipment-management'
    },
    equipmentStatistics: {
      label: 'Equipment Statistics',
      visible: false,
      router: '/equipment-statistics'
    },
    performanceInsight: {
      label: 'Performance Insight',
      visible: false,
      router: '/performance-insight'
    },
    piVision: {
      label: 'PI Vision',
      visible: false,
      router: '/pivision'
    },
    protean: {
      label: 'Protean',
      visible: false,
      router: '/protean'
    },
    userManagement: {
      label: 'User Management',
      visible: false,
      router: '/user-management'
    }
  },
  roleViews: {
    dataEntryEditable: false,
    dataEntryViewable: false,
    dataManagementEditable: false,
    dataManagementViewable: false,
    equipmentManagementViewable: false,
    equipmentStatisticsViewable: false,
    kpiStatisticsViewable: false,
    landingPageViewable: false,
    performanceInsightViewable: false,
    piVisionViewable: false,
    proteanViewable: false,
    userManagementViewable: false
  }
};

export function coreReducer(state = initialState, action): State {
  if (action.type === CoreActions.APPLY_AUTH) {
    const newState = { ...state, ...action.payload };
    for (const key of Object.keys(newState.menuItems)) {
      newState.menuItems[key].visible = false;
    }

    for (const key of newState.roleViews) {
      newState.roleViews[key] = false;
    }

    if (newState.userInfo.roles.indexOf('Administrator') !== -1) {
      newState.menuItems.landingPage.visible = true;
      newState.menuItems.dataEntry.visible = true;
      newState.menuItems.kpiStatistics.visible = true;
      newState.menuItems.dataManagement.visible = true;
      newState.menuItems.equipmentManagement.visible = true;
      newState.menuItems.equipmentStatistics.visible = true;
      newState.menuItems.performanceInsight.visible = true;
      newState.menuItems.piVision.visible = true;
      newState.menuItems.protean.visible = true;
      newState.menuItems.userManagement.visible = true;

      newState.roleViews.landingPageViewable = true;
      newState.roleViews.dataEntryViewable = true;
      newState.roleViews.kpiStatisticsViewable = true;
      newState.roleViews.dataManagementViewable = true;
      newState.roleViews.equipmentManagementViewable = true;
      newState.roleViews.equipmentStatisticsViewable = true;
      newState.roleViews.performanceInsightViewable = true;
      newState.roleViews.piVisionViewable = true;
      newState.roleViews.proteanViewable = true;
      newState.roleViews.userManagementViewable = true;
      newState.roleViews.dataManagementEditable = true;
      newState.redirectLinkWhenLoginSuccess = '/landing-page';
    }
    if (newState.userInfo.roles.indexOf('Visitor') !== -1) {
      newState.menuItems.landingPage.visible = true;
      newState.menuItems.dataEntry.visible = true;
      newState.menuItems.kpiStatistics.visible = true;
      newState.menuItems.dataManagement.visible = true;
      newState.menuItems.equipmentStatistics.visible = true;
      newState.menuItems.performanceInsight.visible = true;
      newState.menuItems.piVision.visible = true;

      newState.roleViews.landingPageViewable = true;
      newState.roleViews.dataEntryViewable = true;
      newState.roleViews.kpiStatisticsViewable = true;
      newState.roleViews.equipmentStatisticsViewable = true;
      newState.roleViews.performanceInsightViewable = true;
      newState.roleViews.piVisionViewable = true;
      newState.roleViews.dataManagementViewable = true;
      newState.redirectLinkWhenLoginSuccess = '/landing-page';
    }
    if (newState.userInfo.roles.indexOf('Region Focal') !== -1) {
      newState.menuItems.landingPage.visible = true;
      newState.menuItems.dataEntry.visible = true;
      newState.menuItems.kpiStatistics.visible = true;
      newState.menuItems.dataManagement.visible = true;
      newState.menuItems.equipmentStatistics.visible = true;
      newState.menuItems.performanceInsight.visible = true;
      newState.menuItems.piVision.visible = true;

      newState.roleViews.landingPageViewable = true;
      newState.roleViews.dataEntryViewable = true;
      newState.roleViews.kpiStatisticsViewable = true;
      newState.roleViews.dataManagementViewable = true;
      newState.roleViews.equipmentStatisticsViewable = true;
      newState.roleViews.performanceInsightViewable = true;
      newState.roleViews.piVisionViewable = true;
      newState.roleViews.dataEntryEditable = true;
      newState.redirectLinkWhenLoginSuccess = '/landing-page';
    }
    if (newState.userInfo.roles.indexOf('Protean Team') !== -1) {
      newState.menuItems.piVision.visible = true;
      newState.menuItems.protean.visible = true;

      newState.roleViews.piVisionViewable = true;
      newState.roleViews.proteanViewable = true;
      newState.redirectLinkWhenLoginSuccess = '/protean';
    }
    return newState;

  }
  switch (action.type) {
    case (CoreActions.REMEMBER_URL):
      state.redirectLinkWhenLoginSuccess = action.path;
      return { ...state };
  }

  return state;
}
