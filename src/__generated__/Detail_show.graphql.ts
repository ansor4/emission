/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { LocationMap_location$ref } from "./LocationMap_location.graphql";
import { ShowArtistsPreview_show$ref } from "./ShowArtistsPreview_show.graphql";
import { ShowArtworksPreview_show$ref } from "./ShowArtworksPreview_show.graphql";
import { ShowHeader_show$ref } from "./ShowHeader_show.graphql";
import { Shows_show$ref } from "./Shows_show.graphql";
declare const _Detail_show$ref: unique symbol;
export type Detail_show$ref = typeof _Detail_show$ref;
export type Detail_show = {
    readonly internalID: string;
    readonly slug: string;
    readonly description: string | null;
    readonly location: {
        readonly openingHours: ({
            readonly schedules?: ReadonlyArray<{
                readonly days: string | null;
                readonly hours: string | null;
            } | null> | null;
            readonly text?: string | null;
        } & ({
            readonly schedules: ReadonlyArray<{
                readonly days: string | null;
                readonly hours: string | null;
            } | null> | null;
        } | {
            readonly text: string | null;
        } | {
            /*This will never be '% other', but we need some
            value in case none of the concrete values match.*/
            readonly __typename: "%other";
        })) | null;
        readonly " $fragmentRefs": LocationMap_location$ref;
    } | null;
    readonly artistsWithoutArtworks: ReadonlyArray<{
        readonly slug: string;
    } | null> | null;
    readonly counts: {
        readonly artworks: number | null;
        readonly artists: number | null;
    } | null;
    readonly partner: ({
        readonly name?: string | null;
        readonly type?: string | null;
    } & ({
        readonly name: string | null;
        readonly type: string | null;
    } | {
        /*This will never be '% other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    })) | null;
    readonly " $fragmentRefs": ShowHeader_show$ref & ShowArtworksPreview_show$ref & ShowArtistsPreview_show$ref & Shows_show$ref;
    readonly " $refType": Detail_show$ref;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Detail_show",
  "type": "Show",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "internalID",
      "args": null,
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "location",
      "storageKey": null,
      "args": null,
      "concreteType": "Location",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "openingHours",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": false,
          "selections": [
            {
              "kind": "InlineFragment",
              "type": "OpeningHoursArray",
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "schedules",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "FormattedDaySchedules",
                  "plural": true,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "days",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "hours",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                }
              ]
            },
            {
              "kind": "InlineFragment",
              "type": "OpeningHoursText",
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "text",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        },
        {
          "kind": "FragmentSpread",
          "name": "LocationMap_location",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "artistsWithoutArtworks",
      "storageKey": null,
      "args": null,
      "concreteType": "Artist",
      "plural": true,
      "selections": [
        (v0/*: any*/)
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "counts",
      "storageKey": null,
      "args": null,
      "concreteType": "ShowCounts",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "artworks",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "artists",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "partner",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "type": "Partner",
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "name",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "type",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "ShowHeader_show",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ShowArtworksPreview_show",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ShowArtistsPreview_show",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Shows_show",
      "args": null
    }
  ]
};
})();
(node as any).hash = '6b10fecaf389604f1d711c4b5b4bda88';
export default node;
