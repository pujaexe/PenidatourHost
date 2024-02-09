// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8sqboUZ4NdiwTEB5KeNSKm
// Component: 0Pcep1A6T4N4

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import { SliderWrapper } from "@plasmicpkgs/react-slick";
import { sliderHelpers as SliderWrapper_Helpers } from "@plasmicpkgs/react-slick";
import Button from "../../Button"; // plasmic-import: ZzYHWFOP3W93/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantst5XXltJfKzLl } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: T5xXLTJfKZLl/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_penida_tour_host.module.css"; // plasmic-import: 8sqboUZ4NdiwTEB5KeNSKm/projectcss
import sty from "./PlasmicTourPackage.module.css"; // plasmic-import: 0Pcep1A6T4N4/css

import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: UhKaih3_kTNj/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: 9Hxs0EmoDoxJ/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: piPhikoMaLwY/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: oAGk-17bb9h7/icon

createPlasmicElementProxy;

export type PlasmicTourPackage__VariantMembers = {};
export type PlasmicTourPackage__VariantsArgs = {};
type VariantPropType = keyof PlasmicTourPackage__VariantsArgs;
export const PlasmicTourPackage__VariantProps = new Array<VariantPropType>();

export type PlasmicTourPackage__ArgsType = {};
type ArgPropType = keyof PlasmicTourPackage__ArgsType;
export const PlasmicTourPackage__ArgProps = new Array<ArgPropType>();

export type PlasmicTourPackage__OverridesType = {
  root?: Flex__<"div">;
  navigationBar?: Flex__<typeof NavigationBar>;
  hero?: Flex__<"section">;
  h1?: Flex__<"h1">;
  details?: Flex__<"section">;
  columns?: Flex__<"div">;
  sliderCarousel?: Flex__<typeof SliderWrapper>;
  button?: Flex__<typeof Button>;
};

export interface DefaultTourPackageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTourPackage__RenderFunc(props: {
  variants: PlasmicTourPackage__VariantsArgs;
  args: PlasmicTourPackage__ArgsType;
  overrides: PlasmicTourPackage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "sliderCarousel.currentSlide",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0,

        refName: "sliderCarousel",
        onMutate: generateOnMutateForSpec("currentSlide", SliderWrapper_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "8xqfPDGVgCNgQpvPK4GUce",
        opId: "3ff2b8d7-3028-49fb-ba2e-058c599d80dd",
        userArgs: {
          filters: [$ctx.params.slug]
        },
        cacheKey: `plasmic.$.3ff2b8d7-3028-49fb-ba2e-058c599d80dd.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantst5XXltJfKzLl()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <NavigationBar
            data-plasmic-name={"navigationBar"}
            data-plasmic-override={overrides.navigationBar}
            brand={
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__wZeDp
                )}
                component={Link}
                href={"#"}
                platform={"nextjs"}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img___7Qrfz)}
                  displayHeight={"40px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  src={{
                    src: "/plasmic/penida_tour_host/images/nusaPenidaLogopng.png",
                    fullWidth: 595,
                    fullHeight: 200,
                    aspectRatio: undefined
                  }}
                />
              </PlasmicLink__>
            }
            className={classNames("__wab_instance", sty.navigationBar)}
            closeButton={
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__dfDk1)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={"https://static1.plasmic.app/close.svg"}
              />
            }
            itemsGap={24}
            menuItems={
              <React.Fragment>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__tIhed
                  )}
                  component={Link}
                  href={"/"}
                  platform={"nextjs"}
                >
                  {"Home"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link___6FnxP
                  )}
                  component={Link}
                  href={"/#about"}
                  platform={"nextjs"}
                >
                  {"About"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link___6Fkc
                  )}
                  component={Link}
                  href={"/#packages"}
                  platform={"nextjs"}
                >
                  {"Packages"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__y36Nt
                  )}
                  component={Link}
                  href={"/#cta"}
                  platform={"nextjs"}
                >
                  {"Contact"}
                </PlasmicLink__>
              </React.Fragment>
            }
            openButton={
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__iWply)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={"https://static1.plasmic.app/menu.svg"}
              />
            }
            responsiveBreakpoint={768}
          />

          <section
            data-plasmic-name={"hero"}
            data-plasmic-override={overrides.hero}
            className={classNames(projectcss.all, sty.hero)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__lRylu)}
            >
              <h1
                data-plasmic-name={"h1"}
                data-plasmic-override={overrides.h1}
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $queries.query.data[0].name;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "Explore Nusapenida";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </h1>
            </Stack__>
          </section>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__q5RfY)}
          >
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__ztBhk
              )}
              component={Link}
              href={"/"}
              platform={"nextjs"}
            >
              <Icon3Icon
                className={classNames(projectcss.all, sty.svg__kBnXq)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___5D9X
                )}
              >
                {"Home"}
              </div>
            </Stack__>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__hmBi2
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return (
                      "/ " +
                      $ctx.tourlist.find(tour => tour.id === $ctx.params.slug)
                        .package_name
                    );
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          </Stack__>
          <section
            data-plasmic-name={"details"}
            data-plasmic-override={overrides.details}
            className={classNames(projectcss.all, sty.details)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__v4B1F)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__sTSy)}>
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4___5MAl
                    )}
                  >
                    {"Tour Details"}
                  </h4>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sBsl9
                    )}
                  >
                    <div
                      className={projectcss.__wab_expr_html_text}
                      dangerouslySetInnerHTML={{
                        __html: (() => {
                          try {
                            return $queries.query.data[0].description;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "Tour Details";
                            }
                            throw e;
                          }
                        })()
                      }}
                    />
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__uhH6)}>
                  {(() => {
                    const child$Props = {
                      beforeChange: generateStateOnChangePropForCodeComponents(
                        $state,
                        "currentSlide",
                        ["sliderCarousel", "currentSlide"],
                        SliderWrapper_Helpers
                      ),
                      className: classNames(
                        "__wab_instance",
                        sty.sliderCarousel
                      ),
                      initialSlide: generateStateValueProp($state, [
                        "sliderCarousel",
                        "currentSlide"
                      ]),
                      ref: ref => {
                        $refs["sliderCarousel"] = ref;
                      },
                      sliderScopeClassName: sty["sliderCarousel__slider"]
                    };
                    initializeCodeComponentStates(
                      $state,
                      [
                        {
                          name: "currentSlide",
                          plasmicStateName: "sliderCarousel.currentSlide"
                        }
                      ],
                      [],
                      SliderWrapper_Helpers ?? {},
                      child$Props
                    );

                    return (
                      <SliderWrapper
                        data-plasmic-name={"sliderCarousel"}
                        data-plasmic-override={overrides.sliderCarousel}
                        {...child$Props}
                      >
                        {(_par =>
                          !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                          (() => {
                            try {
                              return $queries.query.data[0].img_galery;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return [];
                              }
                              throw e;
                            }
                          })()
                        ).map((__plasmic_item_0, __plasmic_idx_0) => {
                          const currentItem = __plasmic_item_0;
                          const currentIndex = __plasmic_idx_0;
                          return (
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__vtzJn
                              )}
                              key={currentIndex}
                            >
                              <PlasmicImg__
                                alt={""}
                                className={classNames(sty.img__tgVyT)}
                                displayHeight={"300px"}
                                displayMaxHeight={"none"}
                                displayMaxWidth={"100%"}
                                displayMinHeight={"0"}
                                displayMinWidth={"0"}
                                displayWidth={"100%"}
                                src={(() => {
                                  try {
                                    return currentItem;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })()}
                              />
                            </div>
                          );
                        })}
                      </SliderWrapper>
                    );
                  })()}
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__sNhHz)}>
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4__vDjVj
                    )}
                  >
                    {"Itineraries "}
                  </h4>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__jdqSe)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__aeWKs)}
                    >
                      {(_par =>
                        !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                        (() => {
                          try {
                            return $queries.query.data[0].itineraries;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return [];
                            }
                            throw e;
                          }
                        })()
                      ).map((__plasmic_item_0, __plasmic_idx_0) => {
                        const currentItem = __plasmic_item_0;
                        const currentIndex = __plasmic_idx_0;
                        return (
                          <Stack__
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__cvvSu
                            )}
                            key={currentIndex}
                          >
                            <Icon2Icon
                              className={classNames(
                                projectcss.all,
                                sty.svg__vgYdy
                              )}
                              role={"img"}
                            />

                            <Stack__
                              as={"div"}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__vgrYa
                              )}
                            >
                              <h6
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h6,
                                  projectcss.__wab_text,
                                  sty.h6__lgLae
                                )}
                              >
                                <React.Fragment>
                                  {(() => {
                                    try {
                                      return currentItem.time;
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return "";
                                      }
                                      throw e;
                                    }
                                  })()}
                                </React.Fragment>
                              </h6>
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__kejy3
                                )}
                              >
                                <React.Fragment>
                                  {(() => {
                                    try {
                                      return currentItem.activity;
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return "";
                                      }
                                      throw e;
                                    }
                                  })()}
                                </React.Fragment>
                              </div>
                            </Stack__>
                          </Stack__>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__oGuw7)}>
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4__c4S33
                    )}
                  >
                    {"Whats Included"}
                  </h4>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__zdzgq)}
                  >
                    {(_par =>
                      !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                      (() => {
                        try {
                          return $queries.query.data[0].included;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return [];
                          }
                          throw e;
                        }
                      })()
                    ).map((__plasmic_item_0, __plasmic_idx_0) => {
                      const currentItem = __plasmic_item_0;
                      const currentIndex = __plasmic_idx_0;
                      return (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__bAixW
                          )}
                          key={currentIndex}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__uLbdJ
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return currentItem;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__vyuXc)}>
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4__inX3C
                    )}
                  >
                    {"Whats Excluded"}
                  </h4>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__wkiVj)}
                  >
                    {(_par =>
                      !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                      (() => {
                        try {
                          return $queries.query.data[0].excluded;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return [];
                          }
                          throw e;
                        }
                      })()
                    ).map((__plasmic_item_0, __plasmic_idx_0) => {
                      const currentItem = __plasmic_item_0;
                      const currentIndex = __plasmic_idx_0;
                      return (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__qkIci
                          )}
                          key={currentIndex}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__odWqq
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return currentItem;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Stack__>
              <div className={classNames(projectcss.all, sty.column__mqyrU)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__xs7Hq)}
                >
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4__ylNic
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return $queries.query.data[0].price + " IDR";
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "Tour Details";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </h4>
                  <h6
                    className={classNames(
                      projectcss.all,
                      projectcss.h6,
                      projectcss.__wab_text,
                      sty.h6__wbrf3
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return $queries.query.data[0].pax + " Person / pax";
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "Tour Details";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </h6>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cjr2Z
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return $queries.query.data[0].cancelation_policy;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "Tour Details";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__wlC2B)}
                  >
                    <Button
                      data-plasmic-name={"button"}
                      data-plasmic-override={overrides.button}
                      className={classNames("__wab_instance", sty.button)}
                      color={"yellow"}
                      link={
                        "https://wa.me/6281246699833?text=Hello%20Penida%20Tour%20Host"
                      }
                    >
                      {"Book Now"}
                    </Button>
                  </div>
                </Stack__>
              </div>
            </Stack__>
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navigationBar",
    "hero",
    "h1",
    "details",
    "columns",
    "sliderCarousel",
    "button"
  ],
  navigationBar: ["navigationBar"],
  hero: ["hero", "h1"],
  h1: ["h1"],
  details: ["details", "columns", "sliderCarousel", "button"],
  columns: ["columns", "sliderCarousel", "button"],
  sliderCarousel: ["sliderCarousel"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navigationBar: typeof NavigationBar;
  hero: "section";
  h1: "h1";
  details: "section";
  columns: "div";
  sliderCarousel: typeof SliderWrapper;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTourPackage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTourPackage__VariantsArgs;
    args?: PlasmicTourPackage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTourPackage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTourPackage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTourPackage__ArgProps,
          internalVariantPropNames: PlasmicTourPackage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTourPackage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTourPackage";
  } else {
    func.displayName = `PlasmicTourPackage.${nodeName}`;
  }
  return func;
}

export const PlasmicTourPackage = Object.assign(
  // Top-level PlasmicTourPackage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    hero: makeNodeComponent("hero"),
    h1: makeNodeComponent("h1"),
    details: makeNodeComponent("details"),
    columns: makeNodeComponent("columns"),
    sliderCarousel: makeNodeComponent("sliderCarousel"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicTourPackage
    internalVariantProps: PlasmicTourPackage__VariantProps,
    internalArgProps: PlasmicTourPackage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicTourPackage;
/* prettier-ignore-end */
