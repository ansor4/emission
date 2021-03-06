import React from "react"
import "react-native"
import * as renderer from "react-test-renderer"

import { Artist_artist } from "__generated__/Artist_artist.graphql"
import { Artist } from "../Artist"

import { Theme } from "@artsy/palette"

describe("availableTabs", () => {
  it("returns nothing if artist has no metadata, shows, or works", () => {
    const artist = new Artist(artistProps(false))
    expect(artist.availableTabs()).toEqual([])
  })

  it("returns About tab if artist has metadata", () => {
    const artist = new Artist(artistProps(true))
    expect(artist.availableTabs()).toEqual(["About"])
  })

  it("returns About tab if artist has articles", () => {
    const artist = new Artist(artistProps(false, { articles: 1 }))
    expect(artist.availableTabs()).toEqual(["About"])
  })

  it("returns Shows tab if artist has shows", () => {
    const artist = new Artist(artistProps(false, { partner_shows: 2 }))
    expect(artist.availableTabs()).toEqual(["Shows"])
  })

  it("returns Works tab if artist has works", () => {
    const artist = new Artist(artistProps(false, { artworks: 2 }))
    expect(artist.availableTabs()).toEqual(["Works"])
  })

  it("returns all three tabs if artist has metadata, works, and shows", () => {
    const artist = new Artist(artistProps(true, { artworks: 1, partner_shows: 1 }))
    expect(artist.availableTabs()).toEqual(["About", "Works", "Shows"])
  })
})

describe("after rendering", () => {
  it("mounts with Works tab selected if works exist", () => {
    const artist = new Artist(artistProps(false, { artworks: 5 }))
    const worksTabIndex = artist.availableTabs().indexOf("Works")
    expect(artist.initialTabState()).toEqual({ selectedTabIndex: worksTabIndex, selectedTabTitle: "Works" })
  })

  it("mounts at the first tab index if artist has no works", () => {
    const artist = new Artist(artistProps(true, { partner_shows: 1 }))
    expect(artist.initialTabState()).toEqual({ selectedTabIndex: 0, selectedTabTitle: "About" })
  })
})

describe("layout", () => {
  it("works as expected with no tabs", () => {
    const artist = renderer.create(
      <Theme>
        <Artist artist={artistProps(false).artist} />
      </Theme>
    )
    expect(artist.toJSON()).toMatchSnapshot()
  })

  it("works as expected with one tab", () => {
    const artist = renderer.create(
      <Theme>
        <Artist artist={artistProps(true).artist} />
      </Theme>
    )
    expect(artist.toJSON()).toMatchSnapshot()
  })

  it("works as expected with three tabs", () => {
    const artist = renderer.create(
      <Theme>
        <Artist
          artist={
            artistProps(true, {
              artworks: 2,
              partner_shows: 1,
            }).artist
          }
        />
      </Theme>
    )
    expect(artist.toJSON()).toMatchSnapshot()
  })
})

const artistProps = (hasMetadata: boolean, counts?: any) => {
  if (!counts) {
    counts = { articles: 0, partner_shows: 0, artworks: 0 }
  }
  return {
    artist: ({
      internalID: null,
      id: null,
      has_metadata: hasMetadata,
      counts,
      birthday: null,
      name: null,
      nationality: null,
      current_shows: null,
      upcoming_shows: null,
      past_small_shows: null,
      past_large_shows: null,
    } as any) as Artist_artist,
  }
}
