export interface User {
    id: number;
    username: string;
    name: string;
    surname: string;
    emailAddress: string;
    fullName: string;
    isActive: boolean;
    isEmailConfirmed: boolean;
    profiles: string;
    contacts: string;
    code: string;
    valueData: string;
    title: string;
    title_name: string;
}

export interface ITenant {
    id: number;
    tenancyName: string;
    name: string;
    domain: string;
    types: string;
    profiles: string;
    applications: string;
    valueData: string;
    isActive: boolean;
}

export interface ICriteriaRequest {
    propertyName: string;
    operation: number;
    value: string;
}

export interface IBodyRequest {
    maxResultCount?: number;
    skipCount?: number;
    sorting?: string;
    criterias?: ICriteriaRequest[];
}