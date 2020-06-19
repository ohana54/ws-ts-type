/**
 * Created by user on 2020/6/19.
 */
import { AJSONSchemaForLernaJsonFiles } from './types/lerna.json';
import { ITSPartialPick } from 'ts-type/lib/type/record';
import type { ReleaseType as IReleaseType } from 'semver';
import { IPackageJsonTag } from './lib/package-json/types';
export declare type INpmClient = string | 'npm' | 'yarn' | 'lerna';
export type { IReleaseType };
export interface ILernaJsonCommand extends ITSPartialPick<AJSONSchemaForLernaJsonFiles["command"], keyof AJSONSchemaForLernaJsonFiles["command"]> {
    publish?: {
        "bump"?: IReleaseType;
        "conventionalCommits"?: boolean;
        "conventionalGraduate"?: boolean;
        distTag?: IPackageJsonTag;
    };
    "version"?: {
        "bump"?: IReleaseType;
        "conventionalCommits"?: boolean;
        "changelogPreset"?: string | "@bluelovers/conventional-changelog-bluelovers";
    };
    run?: {
        "stream": boolean;
    };
    exec?: {
        "stream": boolean;
    };
    [k: string]: unknown;
}
export interface ILernaJson extends AJSONSchemaForLernaJsonFiles {
    /**
     * The current version of the repository (or independent).
     */
    version?: string | "independent";
    /**
     * Specify which client to run commands with (change to "yarn" to run commands with yarn. Defaults to "npm".
     */
    npmClient?: INpmClient;
    workspaces?: (string | "packages/*")[];
    packages?: (string | "packages/*")[];
    command?: ILernaJsonCommand;
}
export default ILernaJson;
