import { Controller, render, Route } from '@entropy';

export class RootController implements Controller {
  @Route.Get('/')
  public async index() {
    return await render('home', {
      message: 'Hello, world!',
    });
  }

  @Route.Error(404)
  public async notFound() {
    return await render('404');
  }
}