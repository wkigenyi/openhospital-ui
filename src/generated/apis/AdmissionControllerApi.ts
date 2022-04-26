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

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, HttpQuery, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    AdmissionDTO,
    AdmittedPatientDTO,
} from '../models';

export interface DeleteAdmissionTypeUsingDELETERequest {
    id: number;
}

export interface DischargePatientUsingPOSTRequest {
    patientCode: number;
    currentAdmissionDTO: AdmissionDTO;
}

export interface GetAdmissionsUsingGETRequest {
    id: number;
}

export interface GetAdmittedPatientsUsingGETRequest {
    admissionrange?: string;
    dischargerange?: string;
    searchterms?: string;
}

export interface GetCurrentAdmissionUsingGETRequest {
    patientCode: number;
}

export interface GetNextYProgUsingGETRequest {
    warcode: string;
}

export interface GetPatientAdmissionsUsingGETRequest {
    patientCode: number;
}

export interface GetUsedWardBedUsingGETRequest {
    wardid: string;
}

export interface NewAdmissionsUsingPOSTRequest {
    newAdmissionDTO: AdmissionDTO;
}

export interface UpdateAdmissionsUsingPUTRequest {
    updAdmissionDTO: AdmissionDTO;
}

/**
 * no description
 */
export class AdmissionControllerApi extends BaseAPI {

    /**
     * deleteAdmissionType
     */
    deleteAdmissionTypeUsingDELETE({ id }: DeleteAdmissionTypeUsingDELETERequest): Observable<boolean>
    deleteAdmissionTypeUsingDELETE({ id }: DeleteAdmissionTypeUsingDELETERequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    deleteAdmissionTypeUsingDELETE({ id }: DeleteAdmissionTypeUsingDELETERequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(id, 'id', 'deleteAdmissionTypeUsingDELETE');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<boolean>({
            url: '/admissions/{id}'.replace('{id}', encodeURI(id)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * dischargePatient
     */
    dischargePatientUsingPOST({ patientCode, currentAdmissionDTO }: DischargePatientUsingPOSTRequest): Observable<boolean>
    dischargePatientUsingPOST({ patientCode, currentAdmissionDTO }: DischargePatientUsingPOSTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    dischargePatientUsingPOST({ patientCode, currentAdmissionDTO }: DischargePatientUsingPOSTRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(patientCode, 'patientCode', 'dischargePatientUsingPOST');
        throwIfNullOrUndefined(currentAdmissionDTO, 'currentAdmissionDTO', 'dischargePatientUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'patientCode': patientCode,
        };

        return this.request<boolean>({
            url: '/admissions/discharge',
            method: 'POST',
            headers,
            query,
            body: currentAdmissionDTO,
        }, opts?.responseOpts);
    };

    /**
     * getAdmissions
     */
    getAdmissionsUsingGET({ id }: GetAdmissionsUsingGETRequest): Observable<AdmissionDTO>
    getAdmissionsUsingGET({ id }: GetAdmissionsUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<AdmissionDTO>>
    getAdmissionsUsingGET({ id }: GetAdmissionsUsingGETRequest, opts?: OperationOpts): Observable<AdmissionDTO | RawAjaxResponse<AdmissionDTO>> {
        throwIfNullOrUndefined(id, 'id', 'getAdmissionsUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<AdmissionDTO>({
            url: '/admissions/{id}'.replace('{id}', encodeURI(id)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getAdmittedPatients
     */
    getAdmittedPatientsUsingGET({ admissionrange, dischargerange, searchterms }: GetAdmittedPatientsUsingGETRequest): Observable<Array<AdmittedPatientDTO>>
    getAdmittedPatientsUsingGET({ admissionrange, dischargerange, searchterms }: GetAdmittedPatientsUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<AdmittedPatientDTO>>>
    getAdmittedPatientsUsingGET({ admissionrange, dischargerange, searchterms }: GetAdmittedPatientsUsingGETRequest, opts?: OperationOpts): Observable<Array<AdmittedPatientDTO> | RawAjaxResponse<Array<AdmittedPatientDTO>>> {

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = {};

        if (admissionrange != null) { query['admissionrange'] = admissionrange; }
        if (dischargerange != null) { query['dischargerange'] = dischargerange; }
        if (searchterms != null) { query['searchterms'] = searchterms; }

        return this.request<Array<AdmittedPatientDTO>>({
            url: '/admissions/admittedPatients',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * getCurrentAdmission
     */
    getCurrentAdmissionUsingGET({ patientCode }: GetCurrentAdmissionUsingGETRequest): Observable<AdmissionDTO>
    getCurrentAdmissionUsingGET({ patientCode }: GetCurrentAdmissionUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<AdmissionDTO>>
    getCurrentAdmissionUsingGET({ patientCode }: GetCurrentAdmissionUsingGETRequest, opts?: OperationOpts): Observable<AdmissionDTO | RawAjaxResponse<AdmissionDTO>> {
        throwIfNullOrUndefined(patientCode, 'patientCode', 'getCurrentAdmissionUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'patientCode': patientCode,
        };

        return this.request<AdmissionDTO>({
            url: '/admissions/current',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * getNextYProg
     */
    getNextYProgUsingGET({ warcode }: GetNextYProgUsingGETRequest): Observable<number>
    getNextYProgUsingGET({ warcode }: GetNextYProgUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<number>>
    getNextYProgUsingGET({ warcode }: GetNextYProgUsingGETRequest, opts?: OperationOpts): Observable<number | RawAjaxResponse<number>> {
        throwIfNullOrUndefined(warcode, 'warcode', 'getNextYProgUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'warcode': warcode,
        };

        return this.request<number>({
            url: '/admissions/getNextProgressiveIdInYear',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * getPatientAdmissions
     */
    getPatientAdmissionsUsingGET({ patientCode }: GetPatientAdmissionsUsingGETRequest): Observable<Array<AdmissionDTO>>
    getPatientAdmissionsUsingGET({ patientCode }: GetPatientAdmissionsUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<AdmissionDTO>>>
    getPatientAdmissionsUsingGET({ patientCode }: GetPatientAdmissionsUsingGETRequest, opts?: OperationOpts): Observable<Array<AdmissionDTO> | RawAjaxResponse<Array<AdmissionDTO>>> {
        throwIfNullOrUndefined(patientCode, 'patientCode', 'getPatientAdmissionsUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'patientCode': patientCode,
        };

        return this.request<Array<AdmissionDTO>>({
            url: '/admissions',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * getUsedWardBed
     */
    getUsedWardBedUsingGET({ wardid }: GetUsedWardBedUsingGETRequest): Observable<number>
    getUsedWardBedUsingGET({ wardid }: GetUsedWardBedUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<number>>
    getUsedWardBedUsingGET({ wardid }: GetUsedWardBedUsingGETRequest, opts?: OperationOpts): Observable<number | RawAjaxResponse<number>> {
        throwIfNullOrUndefined(wardid, 'wardid', 'getUsedWardBedUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'wardid': wardid,
        };

        return this.request<number>({
            url: '/admissions/getBedsOccupationInWard',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * newAdmissions
     */
    newAdmissionsUsingPOST({ newAdmissionDTO }: NewAdmissionsUsingPOSTRequest): Observable<number>
    newAdmissionsUsingPOST({ newAdmissionDTO }: NewAdmissionsUsingPOSTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<number>>
    newAdmissionsUsingPOST({ newAdmissionDTO }: NewAdmissionsUsingPOSTRequest, opts?: OperationOpts): Observable<number | RawAjaxResponse<number>> {
        throwIfNullOrUndefined(newAdmissionDTO, 'newAdmissionDTO', 'newAdmissionsUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<number>({
            url: '/admissions',
            method: 'POST',
            headers,
            body: newAdmissionDTO,
        }, opts?.responseOpts);
    };

    /**
     * updateAdmissions
     */
    updateAdmissionsUsingPUT({ updAdmissionDTO }: UpdateAdmissionsUsingPUTRequest): Observable<number>
    updateAdmissionsUsingPUT({ updAdmissionDTO }: UpdateAdmissionsUsingPUTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<number>>
    updateAdmissionsUsingPUT({ updAdmissionDTO }: UpdateAdmissionsUsingPUTRequest, opts?: OperationOpts): Observable<number | RawAjaxResponse<number>> {
        throwIfNullOrUndefined(updAdmissionDTO, 'updAdmissionDTO', 'updateAdmissionsUsingPUT');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<number>({
            url: '/admissions',
            method: 'PUT',
            headers,
            body: updAdmissionDTO,
        }, opts?.responseOpts);
    };

}
