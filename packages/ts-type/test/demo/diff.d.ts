/**
 * Created by user on 2018/11/27/027.
 */
import { ITSPickNot } from 'ts-type';
export declare type Origin = {
    a: string;
    b: string;
    _c: string;
    _d: string;
};
export declare type Result = Omit<Origin, '_c' | '_d'>;
export declare type Result2 = ITSPickNot<Origin, '_c' | '_d'>;
export declare type OriginOnlyHasPrefix = {
    _c: string;
    _d: string;
};
export declare type Result3 = Omit<Origin, keyof OriginOnlyHasPrefix>;
