import {
  InspectorControls,
  AlignmentToolbar,
  RichText,
} from "@wordpress/block-editor";
import {
  ToggleControl,
  PanelBody,
  PanelRow,
  CheckboxControl,
  SelectControl,
  ColorPicker,
  Text,
  Grid,
  TextControl,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { useState, useEffect } from "react";
import axios from "axios";
import useFetchData from "./use-fetch-data.js";

import "./index.scss";

wp.blocks.registerBlockType("ourplugin/posts-grids", {
  title: "Posts Grids By Umer",
  description: "Seleect youy post type Grird sletect stlyle ",
  icon: "smiley",
  attributes: {
    myRichHeading: {
      type: "string",
    },
    toggle: {
      type: "boolean",
      default: true,
    },
    favoriteAnimal: {
      type: "string",
      default: "dogs",
    },
    favoriteColor: {
      type: "string",
      default: "#DDDDDD",
    },
    activateLasers: {
      type: "boolean",
      default: false,
    },
    numberOfPosts: {
      type: "string",
      default: 6,
    },
    selectCategory: {
      type: "string",
      default: "Uncategorized",
    },
  },

  category: "common",
  edit: EditComponent,
  save: function () {
    return null;
  },
});

function EditComponent(props) {
  const { attributes, setAttributes } = props;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const allPosts = useSelect((select) => {
    return select("core").getEntityRecords("postType", "post");
  });

  const getCategoriesByPost = wp.data
    .select("core")
    .getEntityRecords("taxonomy", "category");
  if (allPosts == undefined) return <p>Loading...</p>;
  return (
    <div className="featured-professor-wrapper">
      <div>
        <InspectorControls>
          <PanelBody title="Most awesome settings ever" initialOpen={false}>
            <PanelRow>
              <ToggleControl
                label="Do You Want Search Bar Enabled"
                checked={attributes.toggle}
                onChange={(newval) => setAttributes({ toggle: newval })}
              />
            </PanelRow>

            <PanelRow>
              <SelectControl
                label="Select your categories"
                value={attributes.favoriteAnimal}
                options={[
                  { label: "Dogs", value: "dogs" },
                  { label: "Cats", value: "cats" },
                  { label: "Something else", value: "weird_one" },
                ]}
                onChange={(newval) => setAttributes({ favoriteAnimal: newval })}
              />
            </PanelRow>
            <PanelRow>
              <ColorPicker
                color={attributes.favoriteColor}
                onChangeComplete={(newval) =>
                  setAttributes({ favoriteColor: newval.hex })
                }
                disableAlpha
              />
            </PanelRow>
            <PanelRow>
              <CheckboxControl
                label="Activate lasers?"
                checked={attributes.activateLasers}
                onChange={(newval) => setAttributes({ activateLasers: newval })}
              />
            </PanelRow>
          </PanelBody>
          <PanelBody title="Post setting" initialOpen={false}>
            <PanelRow>
              <TextControl
                label="  Enter number of how show"
                type="number"
                value={attributes.numberOfPosts}
                onChange={(value) => setAttributes({ activateLasers: value })}
              />
            </PanelRow>
            <PanelRow>
              <SelectControl
                label="Select your categories"
                value={attributes.selectCategory}
                options={
                  getCategoriesByPost &&
                  getCategoriesByPost.map((postc) => {
                    return { label: postc.name, value: postc.id };
                  })
                }
                onChange={(newval) => setAttributes({ selectCategory: newval })}
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>
      </div>
      <div
        className="professor-select-container"
        style={{
          backgroundColor: attributes.favoriteColor,
        }}
      >
        <div>
          {allPosts &&
            allPosts.map((post, i) => {
              const a = 0;
              const featuredImage = post.featured_media
                ? wp.data.select("core").getMedia(post.featured_media)
                : null;
              const getUser = post.author
                ? wp.data
                    .select("core")
                    .getEntityRecords("root", "user", { include: post.author })
                : null;
              const getCategoriesByPosts = wp.data
                .select("core")
                .getEntityRecords("taxonomy", "category", {
                  include: post.categories,
                });
              const date = new Date(post.date.split("T")[0]);
              const day = String(date.getDate()).padStart(2, "0");

              return (
                <div key={post.id}>
                  {featuredImage && (
                    <img
                      src={
                        featuredImage.media_details.sizes.thumbnail.source_url
                      }
                    />
                  )}

                  {getCategoriesByPosts &&
                    getCategoriesByPosts.map((postscat) => {
                      return <a href={postscat.link}>{postscat.name} </a>;
                    })}
                  {getUser && (
                    <a href={getUser[a].link}>{getUser[a].username}</a>
                  )}

                  <h4>{post.title.rendered}</h4>

                  <div>
                    {day}-{monthNames[date.getMonth()]}-{date.getFullYear()}
                  </div>
                  {post.excerpt.rendered
                    .replace(/(<([^>]+)>)/gi, "")
                    .slice(0, 100)
                    .concat("...")}
                </div>
              );
            })}
        </div>
        <div>{}</div>
      </div>
    </div>
  );
}
