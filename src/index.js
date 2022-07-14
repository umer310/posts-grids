import {
  InspectorControls,
  AlignmentToolbar,
  RichText,
  BlockControls,
} from "@wordpress/block-editor";
import {
  TextControl,
  ToggleControl,
  PanelBody,
  PanelRow,
  CheckboxControl,
  SelectControl,
  ColorPicker,
  Text,
  Grid,
  FontSizePicker,
} from "@wordpress/components";
import { __experimentalBoxControl as BoxControl } from "@wordpress/components";
import { __experimentalBorderControl as BorderControl } from "@wordpress/components";

import { useSelect } from "@wordpress/data";
import { useState, useEffect } from "react";
import ComponentsSide from "./backend-components/ComponentsSide";

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
      default: "asc",
    },
    orderBy: {
      type: "string",
      default: "title",
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
      default: 0,
    },
    paddingForMainBox: {
      type: "object",
      default: { top: "10px", right: "10px", bottom: "10px", left: "10px" },
    },
    paddingForContentBox: {
      type: "object",
      default: { top: "10px", right: "10px", bottom: "10px", left: "10px" },
    },
    borderMainBox: {
      type: "object",
      default: { color: "#72aee6", style: "solid", width: "1px" },
    },
    maniFontSizes: {
      type: "number",
      default: 12,
    },
    fontSizeM: {
      type: "number",
      default: 16,
    },
    fontColorForMain: {
      type: "string",
      default: "#232323",
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

  console.log(attributes);

  const colors = [
    { name: "Blue 20", color: "#72aee6" },
    // ...
  ];

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
  let mainStyle = {
    paddingTop: attributes.paddingForMainBox.top,
    paddingRight: attributes.paddingForMainBox.right,
    paddingBottom: attributes.paddingForMainBox.bottom,
    paddingLeft: attributes.paddingForMainBox.left,
    backgroundColor: attributes.favoriteColor,
    borderColor: attributes.borderMainBox.color,
    borderStyle: attributes.borderMainBox.style,
    borderWidth: attributes.borderMainBox.width,
    fontSize: attributes.fontSizeM,
    color: attributes.fontColorForMain,
  };
  let contentStyle = {
    paddingTop: attributes.paddingForContentBox.top,
    paddingRight: attributes.paddingForContentBox.right,
    paddingBottom: attributes.paddingForContentBox.bottom,
    paddingLeft: attributes.paddingForContentBox.left,
  };

  const allPosts = useSelect((select) => {
    return select("core").getEntityRecords("postType", "post", {
      per_page: props.attributes.numberOfPosts,
      categories: props.attributes.selectCategory,
      order: `${props.attributes.favoriteAnimal}`,
    });
  });

  const getCategoriesByPost = wp.data
    .select("core")
    .getEntityRecords("taxonomy", "category");

  const getAllRegistersPostsNams = wp.data.select("core");
  //console.log(getAllRegistersPostsNams.getPostType());

  {
    getCategoriesByPost &&
      setAttributes({ selectCategory: getCategoriesByPost[0].id });
  }
  function updateQuestionValue(value) {
    setAttributes({ numberOfPosts: value });
  }

  // if (allPosts == undefined) return <p>Loading...</p>;
  return (
    <div className={"featured-professor-wrapper "}>
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
              <BorderControl
                colors={colors}
                value={attributes.borderMainBox}
                label={"Border"}
                onChange={(nextValues) =>
                  setAttributes({ borderMainBox: nextValues })
                }
              />
            </PanelRow>
            <PanelRow>
              <ColorPicker
                color={attributes.fontColorForMain}
                onChangeComplete={(newval) =>
                  setAttributes({ fontColorForMain: newval.hex })
                }
                disableAlpha
              />
            </PanelRow>
            <PanelRow>
              <BoxControl
                values={attributes.paddingForMainBox}
                onChange={(nextValues) =>
                  setAttributes({ paddingForMainBox: nextValues })
                }
              />
            </PanelRow>
            <PanelRow>
              <BoxControl
                values={attributes.paddingForContentBox}
                onChange={(nextValues) =>
                  setAttributes({ paddingForContentBox: nextValues })
                }
              />
            </PanelRow>
            <PanelRow>
              <FontSizePicker
                value={attributes.fontSizeM}
                onChange={(newFontSize) => {
                  setAttributes({ fontSizeM: newFontSize });
                }}
              />
            </PanelRow>
            <PanelRow>
              <SelectControl
                label="Select your categories"
                value={attributes.favoriteAnimal}
                options={[
                  { label: "ASC", value: "asc" },
                  { label: "DESC", value: "desc" },
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
                onChange={(value) => setAttributes({ numberOfPosts: value })}
                value={attributes.numberOfPosts}
              />
              {/* {console.log(attributes.numberOfPosts)} */}
            </PanelRow>
            <PanelRow>
              <SelectControl
                label="Order By"
                value={attributes.orderBy}
                options={[
                  { label: "Data", value: "data" },
                  { label: "Title", value: "title" },
                  { label: "Random", value: "random" },
                ]}
                onChange={(value) => setAttributes({ orderBy: value })}
              />
            </PanelRow>
            <PanelRow>
              <SelectControl
                label="Select your categories"
                value={attributes.selectCategory}
                options={
                  getCategoriesByPost &&
                  getCategoriesByPost.map((postc) => {
                    return {
                      label: postc.name,
                      value: postc.id,
                    };
                  })
                }
                onChange={(newval) => setAttributes({ selectCategory: newval })}
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>
      </div>
      {attributes.toggle == true ? (
        <input placeholder="Type something to search" type="text" />
      ) : (
        ""
      )}
      <div className={"posts-grids-container layout " + props.className}>
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
              <div key={post.id} className="cell" style={mainStyle}>
                {/* {console.log(post)} */}
                {featuredImage && (
                  <img
                    src={featuredImage.media_details.sizes.thumbnail.source_url}
                  />
                )}
                <div className="post-content" style={contentStyle}>
                  <div className="post-mata">
                    {getCategoriesByPosts &&
                      getCategoriesByPosts.map((postscat, i) => {
                        return (
                          <a className="post-category" href={postscat.link}>
                            {postscat.name}{" "}
                          </a>
                        );
                      })}
                    {getUser && (
                      <a className="post-user" href={getUser[a].link}>
                        {getUser[a].username}
                      </a>
                    )}
                  </div>

                  <h4 className="post-title">{post.title.rendered}</h4>

                  <div className="post-date">
                    {day}-{monthNames[date.getMonth()]}-{date.getFullYear()}
                  </div>
                  <div className="post-expcerpt">
                    {post.excerpt.rendered
                      .replace(/(<([^>]+)>)/gi, "")
                      .slice(0, 100)
                      .concat("...")}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div>{}</div>
    </div>
  );
}
