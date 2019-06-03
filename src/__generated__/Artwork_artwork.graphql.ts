/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { AboutArtist_artwork$ref } from "./AboutArtist_artwork.graphql";
import { ArtworkActions_artwork$ref } from "./ArtworkActions_artwork.graphql";
import { ArtworkAvailability_artwork$ref } from "./ArtworkAvailability_artwork.graphql";
import { ArtworkTombstone_artwork$ref } from "./ArtworkTombstone_artwork.graphql";
import { OtherWorks_artwork$ref } from "./OtherWorks_artwork.graphql";
import { SellerInfo_artwork$ref } from "./SellerInfo_artwork.graphql";
declare const _Artwork_artwork$ref: unique symbol;
export type Artwork_artwork$ref = typeof _Artwork_artwork$ref;
export type Artwork_artwork = {
    readonly " $fragmentRefs": ArtworkTombstone_artwork$ref & ArtworkActions_artwork$ref & ArtworkAvailability_artwork$ref & SellerInfo_artwork$ref & OtherWorks_artwork$ref & AboutArtist_artwork$ref;
    readonly " $refType": Artwork_artwork$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Artwork_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "ArtworkTombstone_artwork",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ArtworkActions_artwork",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ArtworkAvailability_artwork",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SellerInfo_artwork",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "OtherWorks_artwork",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "AboutArtist_artwork",
      "args": null
    }
  ]
};
(node as any).hash = '6b37bc5997cf3a6d13b8c3c1e96abb41';
export default node;
