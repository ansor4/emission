/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { ShowEventSection_event$ref } from "./ShowEventSection_event.graphql";
export type ShowEventSectionTestsQueryVariables = {};
export type ShowEventSectionTestsQueryResponse = {
    readonly show: {
        readonly events: ReadonlyArray<{
            readonly " $fragmentRefs": ShowEventSection_event$ref;
        } | null> | null;
    } | null;
};
export type ShowEventSectionTestsQuery = {
    readonly response: ShowEventSectionTestsQueryResponse;
    readonly variables: ShowEventSectionTestsQueryVariables;
};



/*
query ShowEventSectionTestsQuery {
  show(id: "anderson-fine-art-gallery-flickinger-collection") {
    events {
      ...ShowEventSection_event
    }
    id
  }
}

fragment ShowEventSection_event on ShowEventType {
  event_type: eventType
  description
  start_at: startAt
  end_at: endAt
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "anderson-fine-art-gallery-flickinger-collection"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ShowEventSectionTestsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "show",
        "storageKey": "show(id:\"anderson-fine-art-gallery-flickinger-collection\")",
        "args": (v0/*: any*/),
        "concreteType": "Show",
        "plural": false,
        "selections": [
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
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ShowEventSectionTestsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "show",
        "storageKey": "show(id:\"anderson-fine-art-gallery-flickinger-collection\")",
        "args": (v0/*: any*/),
        "concreteType": "Show",
        "plural": false,
        "selections": [
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
                "kind": "ScalarField",
                "alias": "event_type",
                "name": "eventType",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "description",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": "start_at",
                "name": "startAt",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": "end_at",
                "name": "endAt",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ShowEventSectionTestsQuery",
    "id": "2e4ea89cbe5286eb16a06f7f471945d8",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = '491aa923b8d9aaf54ec5b6b9277b9a5e';
export default node;
