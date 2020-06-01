/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type JSONSchemaForTravisCIConfigurationFiles = Job & {
  notifications?: {
    webhooks?:
      | PossiblySecretStringOrPossiblySecretStringTypeArrayUnique
      | boolean
      | {
          disabled?: boolean;
          enabled?: boolean;
          urls?: string | SecretString | (string | SecretString)[];
          on_success?: "always" | "never" | "change";
          on_failure?: "always" | "never" | "change";
          on_start?: "always" | "never" | "change";
          on_cancel?: "always" | "never" | "change";
          on_error?: "always" | "never" | "change";
        }
      | [
          {
            disabled?: boolean;
            enabled?: boolean;
            urls?: string | SecretString | (string | SecretString)[];
            on_success?: "always" | "never" | "change";
            on_failure?: "always" | "never" | "change";
            on_start?: "always" | "never" | "change";
            on_cancel?: "always" | "never" | "change";
            on_error?: "always" | "never" | "change";
          },
          ...{
            disabled?: boolean;
            enabled?: boolean;
            urls?: string | SecretString | (string | SecretString)[];
            on_success?: "always" | "never" | "change";
            on_failure?: "always" | "never" | "change";
            on_start?: "always" | "never" | "change";
            on_cancel?: "always" | "never" | "change";
            on_error?: "always" | "never" | "change";
          }[]
        ];
    slack?:
      | SlackRoom
      | boolean
      | {
          disabled?: boolean;
          enabled?: boolean;
          rooms?: SlackRoom[];
          on_pull_requests?: boolean;
          template?: NotRequiredNonEmptyStringOrArrayOfNonEmptyStrings;
          on_success?: NotificationFrequency;
          on_failure?: NotificationFrequency;
          on_start?: "always" | "never" | "change";
          on_cancel?: "always" | "never" | "change";
          on_error?: "always" | "never" | "change";
        }
      | [
          {
            disabled?: boolean;
            enabled?: boolean;
            rooms?: SlackRoom[];
            on_pull_requests?: boolean;
            template?: NotRequiredNonEmptyStringOrArrayOfNonEmptyStrings;
            on_success?: NotificationFrequency;
            on_failure?: NotificationFrequency;
            on_start?: "always" | "never" | "change";
            on_cancel?: "always" | "never" | "change";
            on_error?: "always" | "never" | "change";
          },
          ...{
            disabled?: boolean;
            enabled?: boolean;
            rooms?: SlackRoom[];
            on_pull_requests?: boolean;
            template?: NotRequiredNonEmptyStringOrArrayOfNonEmptyStrings;
            on_success?: NotificationFrequency;
            on_failure?: NotificationFrequency;
            on_start?: "always" | "never" | "change";
            on_cancel?: "always" | "never" | "change";
            on_error?: "always" | "never" | "change";
          }[]
        ];
    email?:
      | PossiblySecretStringOrPossiblySecretStringTypeArrayUnique
      | boolean
      | {
          disabled?: boolean;
          enabled?: boolean;
          recipients?: PossiblySecretStringOrPossiblySecretStringTypeArrayUnique;
          on_success?: "always" | "never" | "change";
          on_failure?: "always" | "never" | "change";
          on_start?: "always" | "never" | "change";
          on_cancel?: "always" | "never" | "change";
          on_error?: "always" | "never" | "change";
        }
      | [
          {
            disabled?: boolean;
            enabled?: boolean;
            recipients?: PossiblySecretStringOrPossiblySecretStringTypeArrayUnique;
            on_success?: "always" | "never" | "change";
            on_failure?: "always" | "never" | "change";
            on_start?: "always" | "never" | "change";
            on_cancel?: "always" | "never" | "change";
            on_error?: "always" | "never" | "change";
          },
          ...{
            disabled?: boolean;
            enabled?: boolean;
            recipients?: PossiblySecretStringOrPossiblySecretStringTypeArrayUnique;
            on_success?: "always" | "never" | "change";
            on_failure?: "always" | "never" | "change";
            on_start?: "always" | "never" | "change";
            on_cancel?: "always" | "never" | "change";
            on_error?: "always" | "never" | "change";
          }[]
        ];
    irc?:
      | PossiblySecretStringOrPossiblySecretStringTypeArrayUnique
      | boolean
      | {
          disabled?: boolean;
          enabled?: boolean;
          channels?: PossiblySecretStringOrPossiblySecretStringTypeArrayUnique;
          channel_key?: PossiblySecretString;
          nick?: NonEmptyString;
          password?: PossiblySecretString;
          template?: NotRequiredNonEmptyStringOrArrayOfNonEmptyStrings;
          on_success?: "always" | "never" | "change";
          on_failure?: "always" | "never" | "change";
          on_start?: "always" | "never" | "change";
          on_cancel?: "always" | "never" | "change";
          on_error?: "always" | "never" | "change";
          skip_join?: boolean;
          use_notice?: boolean;
        }
      | [
          {
            disabled?: boolean;
            enabled?: boolean;
            channels?: PossiblySecretStringOrPossiblySecretStringTypeArrayUnique;
            channel_key?: PossiblySecretString;
            nick?: NonEmptyString;
            password?: PossiblySecretString;
            template?: NotRequiredNonEmptyStringOrArrayOfNonEmptyStrings;
            on_success?: "always" | "never" | "change";
            on_failure?: "always" | "never" | "change";
            on_start?: "always" | "never" | "change";
            on_cancel?: "always" | "never" | "change";
            on_error?: "always" | "never" | "change";
            skip_join?: boolean;
            use_notice?: boolean;
          },
          ...{
            disabled?: boolean;
            enabled?: boolean;
            channels?: PossiblySecretStringOrPossiblySecretStringTypeArrayUnique;
            channel_key?: PossiblySecretString;
            nick?: NonEmptyString;
            password?: PossiblySecretString;
            template?: NotRequiredNonEmptyStringOrArrayOfNonEmptyStrings;
            on_success?: "always" | "never" | "change";
            on_failure?: "always" | "never" | "change";
            on_start?: "always" | "never" | "change";
            on_cancel?: "always" | "never" | "change";
            on_error?: "always" | "never" | "change";
            skip_join?: boolean;
            use_notice?: boolean;
          }[]
        ];
    pushover?:
      | NonEmptyStringOrArrayOfNonEmptyStrings
      | boolean
      | {
          disabled?: boolean;
          enabled?: boolean;
          api_key?: PossiblySecretString;
          users?: PossiblySecretStringOrPossiblySecretStringTypeArrayUnique;
          template?: NotRequiredNonEmptyStringOrArrayOfNonEmptyStrings;
          on_success?: "always" | "never" | "change";
          on_failure?: "always" | "never" | "change";
          on_start?: "always" | "never" | "change";
          on_cancel?: "always" | "never" | "change";
          on_error?: "always" | "never" | "change";
        }
      | [
          {
            disabled?: boolean;
            enabled?: boolean;
            api_key?: PossiblySecretString;
            users?: PossiblySecretStringOrPossiblySecretStringTypeArrayUnique;
            template?: NotRequiredNonEmptyStringOrArrayOfNonEmptyStrings;
            on_success?: "always" | "never" | "change";
            on_failure?: "always" | "never" | "change";
            on_start?: "always" | "never" | "change";
            on_cancel?: "always" | "never" | "change";
            on_error?: "always" | "never" | "change";
          },
          ...{
            disabled?: boolean;
            enabled?: boolean;
            api_key?: PossiblySecretString;
            users?: PossiblySecretStringOrPossiblySecretStringTypeArrayUnique;
            template?: NotRequiredNonEmptyStringOrArrayOfNonEmptyStrings;
            on_success?: "always" | "never" | "change";
            on_failure?: "always" | "never" | "change";
            on_start?: "always" | "never" | "change";
            on_cancel?: "always" | "never" | "change";
            on_error?: "always" | "never" | "change";
          }[]
        ];
    campfire?:
      | PossiblySecretStringOrPossiblySecretStringTypeArrayUnique
      | boolean
      | {
          disabled?: boolean;
          enabled?: boolean;
          rooms?: PossiblySecretStringOrPossiblySecretStringTypeArrayUnique;
          template?: NonEmptyStringOrArrayOfNonEmptyStrings;
          on_success?: "always" | "never" | "change";
          on_failure?: "always" | "never" | "change";
          on_start?: "always" | "never" | "change";
          on_cancel?: "always" | "never" | "change";
          on_error?: "always" | "never" | "change";
        }
      | [
          {
            disabled?: boolean;
            enabled?: boolean;
            rooms?: PossiblySecretStringOrPossiblySecretStringTypeArrayUnique;
            template?: NonEmptyStringOrArrayOfNonEmptyStrings;
            on_success?: "always" | "never" | "change";
            on_failure?: "always" | "never" | "change";
            on_start?: "always" | "never" | "change";
            on_cancel?: "always" | "never" | "change";
            on_error?: "always" | "never" | "change";
          },
          ...{
            disabled?: boolean;
            enabled?: boolean;
            rooms?: PossiblySecretStringOrPossiblySecretStringTypeArrayUnique;
            template?: NonEmptyStringOrArrayOfNonEmptyStrings;
            on_success?: "always" | "never" | "change";
            on_failure?: "always" | "never" | "change";
            on_start?: "always" | "never" | "change";
            on_cancel?: "always" | "never" | "change";
            on_error?: "always" | "never" | "change";
          }[]
        ];
    flowdock?:
      | PossiblySecretString
      | boolean
      | {
          disabled?: boolean;
          enabled?: boolean;
          api_token?: NonEmptyString;
          on_success?: "always" | "never" | "change";
          on_failure?: "always" | "never" | "change";
          on_start?: "always" | "never" | "change";
          on_cancel?: "always" | "never" | "change";
          on_error?: "always" | "never" | "change";
        }
      | [
          {
            disabled?: boolean;
            enabled?: boolean;
            api_token?: NonEmptyString;
            on_success?: "always" | "never" | "change";
            on_failure?: "always" | "never" | "change";
            on_start?: "always" | "never" | "change";
            on_cancel?: "always" | "never" | "change";
            on_error?: "always" | "never" | "change";
          },
          ...{
            disabled?: boolean;
            enabled?: boolean;
            api_token?: NonEmptyString;
            on_success?: "always" | "never" | "change";
            on_failure?: "always" | "never" | "change";
            on_start?: "always" | "never" | "change";
            on_cancel?: "always" | "never" | "change";
            on_error?: "always" | "never" | "change";
          }[]
        ];
    hipchat?:
      | PossiblySecretStringOrPossiblySecretStringTypeArrayUnique
      | boolean
      | {
          disabled?: boolean;
          enabled?: boolean;
          notify?: boolean;
          on_pull_requests?: boolean;
          rooms?: PossiblySecretStringOrPossiblySecretStringTypeArrayUnique;
          format?: "html" | "text";
          template?: NonEmptyStringOrArrayOfNonEmptyStrings;
          on_success?: "always" | "never" | "change";
          on_failure?: "always" | "never" | "change";
          on_start?: "always" | "never" | "change";
          on_cancel?: "always" | "never" | "change";
          on_error?: "always" | "never" | "change";
        }
      | [
          {
            disabled?: boolean;
            enabled?: boolean;
            notify?: boolean;
            on_pull_requests?: boolean;
            rooms?: PossiblySecretStringOrPossiblySecretStringTypeArrayUnique;
            format?: "html" | "text";
            template?: NonEmptyStringOrArrayOfNonEmptyStrings;
            on_success?: "always" | "never" | "change";
            on_failure?: "always" | "never" | "change";
            on_start?: "always" | "never" | "change";
            on_cancel?: "always" | "never" | "change";
            on_error?: "always" | "never" | "change";
          },
          ...{
            disabled?: boolean;
            enabled?: boolean;
            notify?: boolean;
            on_pull_requests?: boolean;
            rooms?: PossiblySecretStringOrPossiblySecretStringTypeArrayUnique;
            format?: "html" | "text";
            template?: NonEmptyStringOrArrayOfNonEmptyStrings;
            on_success?: "always" | "never" | "change";
            on_failure?: "always" | "never" | "change";
            on_start?: "always" | "never" | "change";
            on_cancel?: "always" | "never" | "change";
            on_error?: "always" | "never" | "change";
          }[]
        ];
  };
  matrix?: {
    exclude?: Job[];
    include?: Job[];
    allow_failures?: Job[];
    /**
     * If some rows in the build matrix are allowed to fail, the build won’t be marked as finished until they have completed. To mark the build as finished as soon as possible, add fast_finish: true
     */
    fast_finish?: boolean;
  };
  jobs?: {
    include?: (Job & {
      /**
       * The name of the build stage
       */
      stage?: string;
      [k: string]: unknown;
    })[];
    exclude?: (Job & {
      /**
       * The name of the build stage
       */
      stage?: string;
      [k: string]: unknown;
    })[];
    allow_failures?: Job[];
    /**
     * If some rows in the build matrix are allowed to fail, the build won’t be marked as finished until they have completed. To mark the build as finished as soon as possible, add fast_finish: true
     */
    fast_finish?: boolean;
  };
  /**
   * Specifies the order of build stages
   */
  stages?: (
    | string
    | {
        name?: string;
        /**
         * Specifies a condition for the stage
         */
        if?: string;
      }
  )[];
  version?: string;
  /**
   * Import YAML config snippets that can be shared across repositories.
   */
  import?: Import[] | Import;
  [k: string]: unknown;
};
export type StringOrStringArrayUnique = NonEmptyString | StringArrayUnique;
export type NonEmptyString = string;
export type StringArrayUnique = [NonEmptyString, ...NonEmptyString[]];
export type StringOrNumberOrAcceptBothTypeAsArrayUnique = StringOrNumber | StringOrNumberAndBothAreTypeArrayUnique;
export type StringOrNumber = NonEmptyString | number;
export type StringOrNumberAndBothAreTypeArrayUnique = [StringOrNumber, ...StringOrNumber[]];
export type XcodeVersions =
  | "xcode6.4"
  | "xcode7.3"
  | "xcode8"
  | "xcode8.3"
  | "xcode9"
  | "xcode9.1"
  | "xcode9.2"
  | "xcode9.3"
  | "xcode9.4"
  | "xcode10"
  | "xcode10.1"
  | "xcode10.2"
  | "xcode10.3"
  | "xcode11"
  | "xcode11.1"
  | "xcode11.2"
  | "xcode11.3";
export type PossiblySecretString =
  | string
  | {
      secure?: string;
    };
export type Cache = "apt" | "bundler" | "cargo" | "ccache" | "cocoapods" | "packages" | "pip" | "yarn" | "npm";
export type Service =
  | "cassandra"
  | "couchdb"
  | "docker"
  | "elasticsearch"
  | "mariadb"
  | "memcached"
  | "mongodb"
  | "mysql"
  | "neo4j"
  | "postgresql"
  | "rabbitmq"
  | "redis"
  | "rethinkdb"
  | "riak"
  | "xvfb";
export type EnvVars = EnvVar | EnvVar[];
export type EnvVar =
  | string
  | {
      secure?: string;
    };
export type Step = boolean | ("skip" | "ignore") | string | string[];
export type Deployment = {
  on?: {
    /**
     * Tell Travis CI to only deploy on tagged commits
     */
    tags?: boolean | string;
    branch?: string;
    all_branches?: boolean;
    /**
     * After your tests ran and before the release, Travis CI will clean up any additional files and changes you made. Maybe that is not what you want, as you might generate some artifacts that are supposed to be released, too.
     */
    skip_cleanup?: boolean;
    repo?: string;
    /**
     * if [[ <condition> ]]; then <deploy>; fi
     */
    condition?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
} & (
  | {
      provider: "script";
      script: string;
      [k: string]: unknown;
    }
  | {
      [k: string]: unknown;
    }
  | {
      provider: "surge";
      project?: string;
      domain?: string;
      [k: string]: unknown;
    }
  | {
      provider: "releases";
      api_key?: PossiblySecretString;
      user?: PossiblySecretString;
      password?: PossiblySecretString;
      file?: string | string[];
      file_glob?: boolean;
      /**
       * If you need to overwrite existing files
       */
      overwrite?: boolean;
      [k: string]: unknown;
    }
  | {
      provider: "heroku";
      /**
       * heroku auth token
       */
      api_key:
        | PossiblySecretString
        | {
            [k: string]: PossiblySecretString;
          };
      app?:
        | string
        | {
            [k: string]: string;
          };
      /**
       * to run a command on Heroku after a successful deploy
       */
      run?: string | string[];
      /**
       * Travis CI default will clean up any additional files and changes you made, you can by it to skip the clean up
       */
      skip_cleanup?: boolean;
      /**
       * Travis CI supports different mechanisms for deploying to Heroku: api is default
       */
      strategy?: "api" | "git";
      [k: string]: unknown;
    }
  | {
      provider: "s3";
      access_key_id: PossiblySecretString;
      secret_access_key: PossiblySecretString;
      bucket: string;
      region?: string;
      skip_cleanup?: boolean;
      acl?:
        | "private"
        | "public_read"
        | "public_read_write"
        | "authenticated_read"
        | "bucket_owner_read"
        | "bucket_owner_full_control";
      local_dir?: string;
      "upload-dir"?: string;
      detect_encoding?: boolean;
      default_text_charset?: string;
      cache_control?: string;
      expires?: string;
      endpoint?: string;
      [k: string]: unknown;
    }
  | {
      provider: string;
      [k: string]: unknown;
    }
);
export type PossiblySecretStringOrPossiblySecretStringTypeArrayUnique =
  | PossiblySecretString
  | [PossiblySecretString, ...PossiblySecretString[]];
/**
 * Your account name, token and optional channel
 */
export type SlackRoom = string | SecretString;
export type NotRequiredNonEmptyStringOrArrayOfNonEmptyStrings = NonEmptyStringOrArrayOfNonEmptyStrings | null;
export type NonEmptyStringOrArrayOfNonEmptyStrings = NonEmptyString | ArrayOfNonEmptyStrings;
export type ArrayOfNonEmptyStrings = NonEmptyString[];
export type NotificationFrequency = "always" | "never" | "change";
export type Import =
  | {
      /**
       * The source to import build config from
       */
      source: string;
      /**
       * How to merge the imported config into the target config (defaults to deep_merge_append)
       */
      mode?: "merge" | "deep_merge" | "deep_merge_append" | "deep_merge_prepend";
      /**
       * Specifies a condition for the import
       */
      if?: string;
    }
  | NonEmptyString;

export interface Job {
  language?:
    | "android"
    | "bash"
    | "c"
    | "c++"
    | "clojure"
    | "cpp"
    | "crystal"
    | "csharp"
    | "d"
    | "dart"
    | "dartlang"
    | "elixir"
    | "elm"
    | "erlang"
    | "generic"
    | "go"
    | "golang"
    | "groovy"
    | "haskell"
    | "haxe"
    | "java"
    | "javascript"
    | "julia"
    | "jvm"
    | "minimal"
    | "nix"
    | "node"
    | "node.js"
    | "node_js"
    | "nodejs"
    | "obj-c"
    | "obj_c"
    | "objective-c"
    | "objective_c"
    | "perl"
    | "perl6"
    | "php"
    | "python"
    | "r"
    | "ruby"
    | "rust"
    | "scala"
    | "sh"
    | "shell"
    | "smalltalk";
  elm?: StringOrStringArrayUnique;
  "elm-test"?: NonEmptyString;
  "elm-format"?: NonEmptyString;
  haxe?: string[];
  scala?: string[];
  sbt_args?: string;
  crystal?: string[];
  neko?: string;
  hxml?: string[];
  smalltalk?: string[];
  perl?: string[];
  perl6?: string[];
  d?: string[];
  dart?: string[];
  dart_task?: {
    test?: string;
    install_dartium?: boolean;
    xvfb?: boolean;
    dartanalyzer?: boolean;
    dartfmt?: boolean;
    [k: string]: unknown;
  }[];
  ghc?: string[];
  lein?: string;
  android?: {
    components?: string[];
    licenses?: string[];
  };
  node_js?: StringOrNumberOrAcceptBothTypeAsArrayUnique;
  compiler?: ("clang" | "gcc")[] | ("clang" | "gcc");
  php?: StringOrNumberOrAcceptBothTypeAsArrayUnique;
  go?: string[] | string;
  jdk?: string | string[];
  /**
   * When the optional solution key is present, Travis will run NuGet package restore and build the given solution.
   */
  solution?: string;
  mono?: "none" | string[];
  xcode_project?: string;
  xcode_workspace?: string;
  xcode_scheme?: string;
  xcode_sdk?: string;
  /**
   * By default, Travis CI will assume that your Podfile is in the root of the repository. If this is not the case, you can specify where the Podfile is
   */
  podfile?: string;
  python?: StringOrNumberOrAcceptBothTypeAsArrayUnique;
  elixir?: string[] | string;
  rust?: string[] | string | number;
  erlang?: string[] | string;
  julia?: StringOrNumberOrAcceptBothTypeAsArrayUnique;
  opt_release?: string[] | string;
  rvm?: StringOrNumberOrAcceptBothTypeAsArrayUnique;
  gemfile?: string | string[];
  bundler_args?: string;
  r?: string[] | string;
  pandoc_version?: string;
  /**
   * A list of packages to install via brew. This option is ignored on non-OS X builds.
   */
  brew_packages?: string[];
  r_binary_packages?: string[];
  r_packages?: string[];
  bioc_packages?: string[];
  r_github_packages?: string[];
  apt_packages?: string[];
  /**
   * CRAN mirror to use for fetching packages
   */
  cran?: string;
  /**
   * Dictionary of repositories to pass to options(repos)
   */
  repos?: {
    [k: string]: string;
  };
  /**
   * The CPU Architecture to run the job on
   */
  arch?:
    | ("amd64" | "arm64" | "ppc64le" | "s390x")
    | ["amd64" | "arm64" | "ppc64le" | "s390x", ...("amd64" | "arm64" | "ppc64le" | "s390x")[]];
  /**
   * The operating system to run the job on
   */
  os?: ("osx" | "linux" | "windows") | ["osx" | "linux" | "windows", ...("osx" | "linux" | "windows")[]];
  osx_image?: XcodeVersions | [XcodeVersions, ...XcodeVersions[]];
  /**
   * The Ubuntu distribution to use
   */
  dist?: "precise" | "trusty" | "xenial" | "bionic" | "focal";
  /**
   * sudo is deprecated
   */
  sudo?: true | false | "" | "required" | "enabled";
  addons?: {
    /**
     * To install packages not included in the default container-based-infrastructure you need to use the APT addon, as sudo apt-get is not available
     */
    apt?: {
      /**
       * To update the list of available packages
       */
      update?: boolean;
      sources?: (
        | {
            /**
             * Key-value pairs which will be added to /etc/apt/sources.list
             */
            sourceline: string;
            /**
             * When APT sources require GPG keys, you can specify this with key_url
             */
            key_url?: string;
          }
        | string
      )[];
      /**
       * To install packages from the package whitelist before your custom build steps
       */
      packages?: string[];
    };
    /**
     * If your build requires setting up custom hostnames, you can specify a single host or a list of them. Travis CI will automatically setup the hostnames in /etc/hosts for both IPv4 and IPv6.
     */
    hosts?: string[] | string;
    artifacts?:
      | true
      | {
          s3_region?: string;
          paths?: string[];
          /**
           * If you’d like to upload file from a specific directory, you can change your working directory
           */
          working_dir?: string;
          /**
           * If you’d like to see more detail about what the artifacts addon is doing
           */
          debug?: boolean;
          [k: string]: unknown;
        };
    /**
     * Firefox addon
     */
    firefox?: "latest" | "latest-esr" | "latest-beta" | "latest-dev" | "latest-nightly" | "latest-unsigned";
    /**
     * Chrome addon
     */
    chrome?: "stable" | "beta";
    /**
     * RethinkDB addon
     */
    rethinkdb?: string;
    /**
     * PostgreSQL addon
     */
    postgresql?: string;
    /**
     * MariaDB addon
     */
    mariadb?: string;
    /**
     * Sauce Connect addon
     */
    sauce_connect?:
      | {
          username?: string;
          access_key?: string;
          [k: string]: unknown;
        }
      | boolean;
    /**
     * SonarCloud addon
     */
    sonarcloud?: {
      organization?: string;
      token?: SecretString;
      [k: string]: unknown;
    };
    /**
     * Coverity Scan addon
     */
    coverity_scan?: {
      /**
       * GitHub project metadata
       */
      project?: {
        name: string;
        version?: number;
        description?: string;
        [k: string]: unknown;
      };
      /**
       * Where email notification of build analysis results will be sent
       */
      notification_email?: string;
      /**
       * Commands to prepare for build_command
       */
      build_command_prepend?: string;
      /**
       * The command that will be added as an argument to 'cov-build' to compile your project for analysis
       */
      build_command?: string;
      /**
       * Pattern to match selecting branches that will run analysis. We recommend leaving this set to 'coverity_scan'
       */
      branch_pattern?: string;
      [k: string]: unknown;
    };
    /**
     * Homebrew addon
     */
    homebrew?: {
      taps?: StringOrStringArrayUnique;
      packages?: StringOrStringArrayUnique;
      casks?: StringOrStringArrayUnique;
      brewfile?: NonEmptyString | boolean;
      update?: boolean;
    };
    /**
     * SourceClear addon
     */
    srcclr?:
      | boolean
      | {
          debug?: boolean;
        };
    /**
     * Snaps addon
     */
    snaps?:
      | NonEmptyString
      | [
          (
            | NonEmptyString
            | {
                name: NonEmptyString;
                channel?: NonEmptyString;
                /**
                 * 'classic:' is deprecated, use 'confinement:'
                 */
                classic?: boolean;
                confinement?: "classic" | "devmode";
              }
          ),
          ...(
            | NonEmptyString
            | {
                name: NonEmptyString;
                channel?: NonEmptyString;
                /**
                 * 'classic:' is deprecated, use 'confinement:'
                 */
                classic?: boolean;
                confinement?: "classic" | "devmode";
              }
          )[]
        ];
    /**
     * BrowserStack addon
     */
    browserstack?: {
      username?: NonEmptyString;
      access_key?: PossiblySecretString;
      app_path?: NonEmptyString;
      proxyHost?: NonEmptyString;
      proxyPort?: NonEmptyString;
      proxyUser?: NonEmptyString;
      proxyPass?: NonEmptyString;
      forcelocal?: boolean;
      only?: NonEmptyString;
      [k: string]: unknown;
    };
  };
  cache?:
    | false
    | Cache
    | (
        | ("apt" | "bundler" | "cargo" | "ccache" | "cocoapods" | "packages" | "pip" | "yarn" | "npm")
        | {
            directories?: string[];
          }
      )[]
    | {
        directories?: string[];
        /**
         * Upload timeout in seconds
         */
        timeout?: number;
        apt?: boolean;
        bundler?: boolean;
        cocoapods?: boolean;
        pip?: boolean;
        yarn?: boolean;
        ccache?: boolean;
        packages?: boolean;
        cargo?: boolean;
        npm?: boolean;
      };
  services?: Service | Service[];
  git?: {
    depth?: number | false;
    /**
     * Travis CI clones repositories without the quiet flag (-q) by default. Enabling the quiet flag can be useful if you’re trying to avoid log file size limits or even if you just don’t need to include it.
     */
    quiet?: boolean;
    /**
     * Control whether submodules should be cloned
     */
    submodules?: boolean;
    /**
     * Skip fetching the git-lfs files during the initial git clone (equivalent to git lfs smudge --skip),
     */
    lfs_skip_smudge?: boolean;
    /**
     * In some work flows, like build stages, it might be beneficial to skip the automatic git clone step.
     */
    clone?: boolean;
    /**
     * Is a path to the existing file in the current repository with data you’d like to put into $GIT_DIR/info/sparse-checkout file of format described in Git documentation.
     */
    sparse_checkout?: string;
    autocrlf?: boolean | "input";
  };
  /**
   * Specify which branches to build
   */
  branches?: {
    except?: string[];
    only?: string[];
  };
  env?:
    | EnvVars
    | {
        global?: EnvVars;
        matrix?: EnvVars;
      };
  before_install?: Step;
  install?: Step;
  before_script?: Step;
  script?: Step;
  before_cache?: Step;
  after_success?: Step;
  after_failure?: Step;
  before_deploy?: Step;
  deploy?: Deployment[] | Deployment;
  after_deploy?: Step;
  after_script?: Step;
  [k: string]: unknown;
}
export interface SecretString {
  secure?: NonEmptyString;
}
