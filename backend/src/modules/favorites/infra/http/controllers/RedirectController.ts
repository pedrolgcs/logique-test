import { Request, Response } from 'express';
import { container } from 'tsyringe';

// services
import urlResolveService from '@modules/favorites/services/UrlResolveService';

class RedirectController {
  public async show(request: Request, response: Response): Promise<void> {
    const { url_code } = request.params;

    const urlResolve = container.resolve(urlResolveService);

    const favorite = await urlResolve.execute({ url_code });

    return response.redirect(favorite.url);
  }
}

export default RedirectController;
