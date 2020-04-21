import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'navegacao',
    loadChildren: () => import('./pages/navegacao/navegacao.module').then(m => m.NavegacaoPageModule)
  },
  {
    path: 'navegacao2',
    loadChildren: () => import('./pages/navegacao2/navegacao2.module').then(m => m.Navegacao2PageModule)
  },
  {
    path: 'botao',
    loadChildren: () => import('./pages/botao/botao.module').then(m => m.BotaoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then(m => m.AlertPageModule)
  },
  {
    path: 'actionsheet',
    loadChildren: () => import('./pages/actionsheet/actionsheet.module').then(m => m.ActionsheetPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./pages/badge/badge.module').then(m => m.BadgePageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then(m => m.CardPageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./pages/checkbox/checkbox.module').then(m => m.CheckboxPageModule)
  },
  {
    path: 'chip',
    loadChildren: () => import('./pages/chip/chip.module').then(m => m.ChipPageModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./pages/content/content.module').then(m => m.ContentPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./pages/datetime/datetime.module').then(m => m.DatetimePageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./pages/fab/fab.module').then(m => m.FabPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./pages/grid/grid.module').then(m => m.GridPageModule)
  },
  {
    path: 'infinitescroll',
    loadChildren: () => import('./pages/infinitescroll/infinitescroll.module').then(m => m.InfinitescrollPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./pages/input/input.module').then(m => m.InputPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'progressbar',
    loadChildren: () => import('./pages/progressbar/progressbar.module').then(m => m.ProgressbarPageModule)
  },
  {
    path: 'refresher',
    loadChildren: () => import('./pages/refresher/refresher.module').then(m => m.RefresherPageModule)
  },
  {
    path: 'reorder',
    loadChildren: () => import('./pages/reorder/reorder.module').then(m => m.ReorderPageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./pages/select/select.module').then(m => m.SelectPageModule)
  },
  {
    path: 'toggle',
    loadChildren: () => import('./pages/toggle/toggle.module').then(m => m.TogglePageModule)
  },
  {
    path: 'searchbar',
    loadChildren: () => import('./pages/searchbar/searchbar.module').then(m => m.SearchbarPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./pages/segment/segment.module').then(m => m.SegmentPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./pages/slides/slides.module').then(m => m.SlidesPageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./pages/toast/toast.module').then(m => m.ToastPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then(m => m.ModalPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./pages/popover/popover.module').then(m => m.PopoverPageModule)
  },
  {
    path: 'radio',
    loadChildren: () => import('./pages/radio/radio.module').then(m => m.RadioPageModule)
  },
  {
    path: 'animacao',
    loadChildren: () => import('./pages/animacao/animacao.module').then( m => m.AnimacaoPageModule)
  },
  {
    path: 'componentes-visuais',
    loadChildren: () => import('./pages/componentes-visuais/componentes-visuais.module').then( m => m.ComponentesVisuaisPageModule)
  },
  {
    path: 'componentes-nativos',
    loadChildren: () => import('./pages/componentes-nativos/componentes-nativos.module').then( m => m.ComponentesNativosPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'texttospeech',
    loadChildren: () => import('./pages/texttospeech/texttospeech.module').then( m => m.TexttospeechPageModule)
  },
  {
    path: 'api',
    loadChildren: () => import('./pages/api/api.module').then( m => m.ApiPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
