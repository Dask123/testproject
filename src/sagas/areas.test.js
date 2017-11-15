import {call, put} from 'redux-saga/effects';
import {areasActions, areasActionsHandlers} from "../actions/areas";
import {getByIdHandler} from './areas';
import { getAreas } from "../api/queries";

test('Тестеирование метода получения областей', () => {
    const id = 113;
    const saga = getByIdHandler(areasActions.getById(id));
    expect(saga.next().value).toEqual(call(getAreas, id));

    const response = {
        data: {
            areas: []
        }
    };
    /*let error = new Error;*/

    expect(saga.next(response).value).toEqual(put(areasActionsHandlers.getAreasSucceeded([])));

    /*expect(saga.next(error).value).toEqual(put(areasActionsHandlers.getByIdFailed(error)));*/
});