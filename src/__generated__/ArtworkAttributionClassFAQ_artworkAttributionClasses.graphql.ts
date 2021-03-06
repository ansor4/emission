/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _ArtworkAttributionClassFAQ_artworkAttributionClasses$ref: unique symbol;
export type ArtworkAttributionClassFAQ_artworkAttributionClasses$ref = typeof _ArtworkAttributionClassFAQ_artworkAttributionClasses$ref;
export type ArtworkAttributionClassFAQ_artworkAttributionClasses = ReadonlyArray<{
    readonly name: string | null;
    readonly longDescription: string | null;
    readonly " $refType": ArtworkAttributionClassFAQ_artworkAttributionClasses$ref;
}>;



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ArtworkAttributionClassFAQ_artworkAttributionClasses",
  "type": "AttributionClass",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
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
      "name": "longDescription",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'be66fc89c75b13152cafac33cdeadb64';
export default node;
