/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { ShowEventSection_event$ref } from "./ShowEventSection_event.graphql";
declare const _MoreInfo_show$ref: unique symbol;
export type MoreInfo_show$ref = typeof _MoreInfo_show$ref;
export type MoreInfo_show = {
    readonly internalID: string;
    readonly slug: string;
    readonly pressReleaseUrl: string | null;
    readonly openingReceptionText: string | null;
    readonly partner: ({
        readonly website?: string | null;
        readonly type?: string | null;
    } & ({
        readonly website: string | null;
        readonly type: string | null;
    } | {
        /*This will never be '% other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    })) | null;
    readonly press_release: string | null;
    readonly events: ReadonlyArray<{
        readonly " $fragmentRefs": ShowEventSection_event$ref;
    } | null> | null;
    readonly " $refType": MoreInfo_show$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "MoreInfo_show",
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
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "slug",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "pressReleaseUrl",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "openingReceptionText",
      "args": null,
      "storageKey": null
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
              "name": "website",
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
      "kind": "ScalarField",
      "alias": "press_release",
      "name": "pressRelease",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "events",
      "storageKey": null,
      "args": null,
      "concreteType": "ShowEventType",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "ShowEventSection_event",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = '85085e24aa4e107b81ae3e19c8567e7a';
export default node;
