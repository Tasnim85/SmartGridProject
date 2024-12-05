import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './Layout/pages-layout/pages-layout.component';

// DEMO PAGES

// Dashboards

import {AnalyticsComponent} from './DemoPages/Dashboards/analytics/analytics.component';

// Pages

import {ForgotPasswordBoxedComponent} from './DemoPages/UserPages/forgot-password-boxed/forgot-password-boxed.component';
import {LoginBoxedComponent} from './DemoPages/UserPages/login-boxed/login-boxed.component';
import {RegisterBoxedComponent} from './DemoPages/UserPages/register-boxed/register-boxed.component';

// Elements

import {StandardComponent} from './DemoPages/Elements/Buttons/standard/standard.component';
import {DropdownsComponent} from './DemoPages/Elements/dropdowns/dropdowns.component';
import {CardsComponent} from './DemoPages/Elements/cards/cards.component';
import {ListGroupsComponent} from './DemoPages/Elements/list-groups/list-groups.component';
import {TimelineComponent} from './DemoPages/Elements/timeline/timeline.component';
import {IconsComponent} from './DemoPages/Elements/icons/icons.component';

// Components

import {AccordionsComponent} from './DemoPages/Components/accordions/accordions.component';
// import {TabsComponent} from './DemoPages/Components/tabs/tabs.component';
import {CarouselComponent} from './DemoPages/Components/carousel/carousel.component';
import {ModalsComponent} from './DemoPages/Components/modals/modals.component';
import {ProgressBarComponent} from './DemoPages/Components/progress-bar/progress-bar.component';
import {PaginationComponent} from './DemoPages/Components/pagination/pagination.component';
import {TooltipsPopoversComponent} from './DemoPages/Components/tooltips-popovers/tooltips-popovers.component';

// Tables

import {TablesMainComponent} from './DemoPages/Tables/tables-main/tables-main.component';

// Widgets

import {ChartBoxes3Component} from './DemoPages/Widgets/chart-boxes3/chart-boxes3.component';

// Forms Elements

import {ControlsComponent} from './DemoPages/Forms/Elements/controls/controls.component';
import {LayoutComponent} from './DemoPages/Forms/Elements/layout/layout.component';

// Charts

import {ChartjsComponent} from './DemoPages/Charts/chartjs/chartjs.component';
import { HomeComponent } from './home/home.component';
import { TagMachineComponent } from './tag-machine/tag-machine.component';
import { TagRoomComponent } from './tag-room/tag-room.component';
import { TagWarehouseComponent } from './tag-warehouse/tag-warehouse.component';
import { OverallComponent } from './overall/overall.component';
import { AlertsComponent } from './alerts/alerts.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';

const routes: Routes = [
  // Routes sans le side bar
  { path: '', component: LoginBoxedComponent }, // Page par défaut
  { path: 'register', component: RegisterBoxedComponent },
  { path: 'forgot-password', component: ForgotPasswordBoxedComponent },

  // Routes avec le layout principal (side bar)
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      // Dashboard routes
      { path: 'tag_machine', component: TagMachineComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'tag_room', component: TagRoomComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'tag_warehouse', component: TagWarehouseComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'Dashboard', component: AnalyticsComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'overall', component: OverallComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'alerts', component: AlertsComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'recommendations', component: RecommendationsComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'home', component: HomeComponent, data: { extraParameter: 'elementsMenu' } },

      // Elements
      { path: 'elements/buttons-standard', component: StandardComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'elements/dropdowns', component: DropdownsComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'elements/icons', component: IconsComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'elements/cards', component: CardsComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'elements/list-group', component: ListGroupsComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'elements/timeline', component: TimelineComponent, data: { extraParameter: 'elementsMenu' } },

      // Components
      { path: 'components/accordions', component: AccordionsComponent, data: { extraParameter: 'componentsMenu' } },
      { path: 'components/modals', component: ModalsComponent, data: { extraParameter: 'componentsMenu' } },
      { path: 'components/progress-bar', component: ProgressBarComponent, data: { extraParameter: 'componentsMenu' } },
      { path: 'components/tooltips-popovers', component: TooltipsPopoversComponent, data: { extraParameter: 'componentsMenu' } },
      { path: 'components/carousel', component: CarouselComponent, data: { extraParameter: 'componentsMenu' } },
      { path: 'components/pagination', component: PaginationComponent, data: { extraParameter: 'componentsMenu' } },

      // Tables
      { path: 'tables/bootstrap', component: TablesMainComponent, data: { extraParameter: 'tablesMenu' } },

      // Widgets
      { path: 'widgets/chart-boxes-3', component: ChartBoxes3Component, data: { extraParameter: 'pagesMenu3' } },

      // Forms Elements
      { path: 'forms/controls', component: ControlsComponent, data: { extraParameter: 'formElementsMenu' } },
      { path: 'forms/layouts', component: LayoutComponent, data: { extraParameter: 'formElementsMenu' } },

      // Charts
      { path: 'charts/chartjs', component: ChartjsComponent, data: { extraParameter: '' } },
    ],
  },
  // Redirection des routes inconnues
  { path: '**', redirectTo: '' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
