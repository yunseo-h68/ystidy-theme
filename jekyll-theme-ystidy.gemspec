# coding: utf-8

Gem::Specification.new do |spec|
  spec.name                    = "jekyll-theme-ystidy"
  spec.version                 = "1.0.0"
  spec.authors                 = ["Yunseo Hwang"]
  spec.email                   = ["yunseo.h68@gmail.com"]

  spec.summary                 = "A tidy and simple jekyll theme for personal website & blog."
  spec.homepage                = "https://github.com/yunseo-h/ystidy"
  spec.license                 = "MIT"

  spec.metadata["plugin_type"] = "theme"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r!^(assets|_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))!i)
  end

  spec.add_runtime_dependency "jekyll", "~> 4.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.11"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.5"

  spec.add_development_dependency "bundler", "~> 2.0"
end
