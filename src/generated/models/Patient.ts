// tslint:disable
/**
 * OH 2.0 Api Documentation
 * OH 2.0 Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    PatientConsensus,
    PatientProfilePhoto,
} from './';

/**
 * @export
 * @interface Patient
 */
export interface Patient {
    /**
     * @type {string}
     * @memberof Patient
     */
    createdBy?: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    createdDate?: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    lastModifiedBy?: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    lastModifiedDate?: string;
    /**
     * @type {number}
     * @memberof Patient
     */
    active?: number;
    /**
     * @type {number}
     * @memberof Patient
     */
    code?: number;
    /**
     * @type {string}
     * @memberof Patient
     */
    firstName: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    secondName: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    name: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    birthDate: string;
    /**
     * @type {number}
     * @memberof Patient
     */
    age: number;
    /**
     * @type {string}
     * @memberof Patient
     */
    agetype?: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    sex: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    address?: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    city: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    nextKin?: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    telephone?: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    note?: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    motherName: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    mother?: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    fatherName: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    father?: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    bloodType: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    hasInsurance?: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    parentTogether?: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    taxCode?: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    maritalStatus?: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    profession?: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    deleted: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    anamnesis?: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    allergies?: string;
    /**
     * @type {number}
     * @memberof Patient
     */
    lock?: number;
    /**
     * @type {PatientProfilePhoto}
     * @memberof Patient
     */
    patientProfilePhoto?: PatientProfilePhoto;
    /**
     * @type {PatientConsensus}
     * @memberof Patient
     */
    patientConsensus?: PatientConsensus;
    /**
     * @type {string}
     * @memberof Patient
     */
    searchString?: string;
    /**
     * @type {string}
     * @memberof Patient
     */
    informations?: string;
}
