<?php

/*
  Plugin Name: Posts Grids Block Type
  Version: 1.0
  Author: Umer  Farooq
  Author URI: https://www.mianumer.com
  * Plugin URI:        https://ataki.com
 * Description:       Handle the basics with this plugina.
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * License:           GPL v2 or later
 * Domain Ptaht: /languages
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class PostsGrids{
  function __construct() {
    add_action('init', [$this, 'onInit']);
  }

  function onInit() {
    wp_register_script('ufPostsGridsScript', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-i18n', 'wp-editor'));
    wp_register_style('ufPostsGridsStyle', plugin_dir_url(__FILE__) . 'build/index.css');

    register_block_type('ourplugin/posts-grids', array(
      'render_callback' => [$this, 'renderCallback'],
      'editor_script' => 'ufPostsGridsScript',
      'editor_style' => 'ufPostsGridsStyle'
    ));
  }

  function renderCallback($attributes) {
    if (!is_admin()) {
      wp_enqueue_script('attentionFrontend', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'));
      wp_enqueue_style('attentionFrontendStyles', plugin_dir_url(__FILE__) . 'build/frontend.css');
  }

    ob_start(); ?>
<div class="paying-attention-update-me">
    <pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre>
    <?php 
    
    ?>
</div>
</div>
<?php return ob_get_clean();
  }

}

$PostsGrids = new PostsGrids();