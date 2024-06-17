/* tslint:disable */
/* eslint-disable */
/**
 * Notes API
 * API for managing notes
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Note } from './Note';
import {
    NoteFromJSON,
    NoteFromJSONTyped,
    NoteToJSON,
} from './Note';

/**
 * 
 * @export
 * @interface UpdateNote200Response
 */
export interface UpdateNote200Response {
    /**
     * 
     * @type {string}
     * @memberof UpdateNote200Response
     */
    message?: string;
    /**
     * 
     * @type {Note}
     * @memberof UpdateNote200Response
     */
    note?: Note;
}

/**
 * Check if a given object implements the UpdateNote200Response interface.
 */
export function instanceOfUpdateNote200Response(value: object): boolean {
    return true;
}

export function UpdateNote200ResponseFromJSON(json: any): UpdateNote200Response {
    return UpdateNote200ResponseFromJSONTyped(json, false);
}

export function UpdateNote200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateNote200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'note': json['note'] == null ? undefined : NoteFromJSON(json['note']),
    };
}

export function UpdateNote200ResponseToJSON(value?: UpdateNote200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message': value['message'],
        'note': NoteToJSON(value['note']),
    };
}

