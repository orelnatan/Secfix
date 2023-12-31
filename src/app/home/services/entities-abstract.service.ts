import { Observable } from 'rxjs';  

import { Entity } from '../models';

export abstract class EntitiesAbstractService {
    abstract fetchAll(parentId?: number): Observable<Entity[]>;

    abstract getSingleEntity(parentId: number, childId: number): Observable<Entity>;

    abstract dispose(): void;
}