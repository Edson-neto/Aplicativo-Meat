import { Restaurant } from './restaurant/restaurant.model';
import { MEAT_API } from '../app.api';
import { ErrorHandler } from '../app.error-handler';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';

import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';

@Injectable()

export class RestaurantsService {

  constructor(private http: HttpClient) {};

  restaurants(search?: string): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`, {params: {q: search}})
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }

  restaurantById (id: string): Observable<Restaurant> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }
}
