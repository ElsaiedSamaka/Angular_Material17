import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./shared/layout/wrapper/wrapper.module').then(
        (m) => m.WrapperModule,
      ),
  },
];
