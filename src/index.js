import {
  InspectorControls,
  AlignmentToolbar,
  TextControl,
  RichText,
} from "@wordpress/block-editor";
import {
  ToggleControl,
  PanelBody,
  PanelRow,
  CheckboxControl,
  SelectControl,
  ColorPicker,
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
    myRichText: {
      type: "string",
      source: "html",
      selector: "p",
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
  },

  category: "common",
  edit: EditComponent,
  save: function () {
    return null;
  },
});

function EditComponent(props) {
  const { attributes, setAttributes } = props;

  const { data, loading } = useFetchData();

  const allPosts = useSelect((select) => {
    return select("core").getEntityRecords("postType", "post");
  });
  let getMediaData = (mediaUrl) => {
    return wp.data.select("core").getMedia(mediaUrl);
  };

  if (allPosts == undefined) return <p>Loading...</p>;
  return (
    <div className="featured-professor-wrapper">
      <div>
        <InspectorControls>
          <PanelBody title="Most awesome settings ever" initialOpen={true}>
            <PanelRow>
              <ToggleControl
                label="Do You Want Search Bar Enabled"
                checked={attributes.toggle}
                onChange={(newval) => setAttributes({ toggle: newval })}
              />
            </PanelRow>
            <PanelRow>
              <RichText
                tagName="h2"
                placeholder="Post Type Name"
                value={attributes.myRichHeading}
                onChange={(newtext) =>
                  setAttributes({ myRichHeading: newtext })
                }
              />
            </PanelRow>
            <PanelRow>
              <SelectControl
                label="What's your favorite animal?"
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
              const featuredImage = post.featured_media
                ? wp.data.select("core").getMedia(post.featured_media)
                : null;

              return (
                <div>
                  {post.title.rendered}
                  {console.log(featuredImage)}
                  {featuredImage && (
                    <img
                      src={
                        featuredImage.media_details.sizes.thumbnail.source_url
                      }
                    />
                  )}
                </div>
              );
            })}
          {/* {allPosts.map((prof) => {
            return (
           
              <div key={prof.id} class="post-item-card">
                {console.log(getMediaData(prof.featured_media))}
               
                <h2>{prof.title.rendered}</h2>
              </div>
            );
          })} */}
        </div>
        <div>{}</div>
      </div>
    </div>
  );
}
