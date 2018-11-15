/**
 * Created by user on 2018/11/15/015.
 */

import { ITSOverwrite, ITSOverwriteReturnType } from '..';

export declare function f(a: number): number

export declare let c: ITSOverwriteReturnType<typeof f, string>;
//c(1).toUpperCase()
// c = (a: number) => string

export interface A1
{
	s: string
}

export type A2 = ITSOverwrite<A1, {
	s: number,
}>
export declare let a2: A2;
// a2.s is number
