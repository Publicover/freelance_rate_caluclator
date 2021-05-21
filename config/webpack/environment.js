const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
environment.plugins.append('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    // i found the following bullshit on pubgrub, trying to swap a partial with ajax
    // it is super important
    jquery: 'jquery',
    Popper: ['popper.js', 'default']
  })
)

module.exports = environment
