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
/**
 * 
 * @export
 * @interface Note
 */
export interface Note {
    /**
     * 
     * @type {string}
     * @memberof Note
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Note
     */
    note: string;
    /**
     * 
     * @type {boolean}
     * @memberof Note
     */
    deleted?: boolean;
}

/**
 * Check if a given object implements the Note interface.
 */
export function instanceOfNote(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('note' in value)) return false;
    return true;
}

export function NoteFromJSON(json: any): Note {
    return NoteFromJSONTyped(json, false);
}

export function NoteFromJSONTyped(json: any, ignoreDiscriminator: boolean): Note {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'note': json['note'],
        'deleted': json['deleted'] == null ? undefined : json['deleted'],
    };
}

export function NoteToJSON(value?: Note | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'note': value['note'],
        'deleted': value['deleted'],
    };
}

