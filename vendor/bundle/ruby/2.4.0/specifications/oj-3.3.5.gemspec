# -*- encoding: utf-8 -*-
# stub: oj 3.3.5 ruby lib
# stub: ext/oj/extconf.rb

Gem::Specification.new do |s|
  s.name = "oj".freeze
  s.version = "3.3.5"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Peter Ohler".freeze]
  s.date = "2017-08-11"
  s.description = "The fastest JSON parser and object serializer. ".freeze
  s.email = "peter@ohler.com".freeze
  s.extensions = ["ext/oj/extconf.rb".freeze]
  s.extra_rdoc_files = ["README.md".freeze, "pages/Advanced.md".freeze, "pages/Compatibility.md".freeze, "pages/Custom.md".freeze, "pages/Encoding.md".freeze, "pages/JsonGem.md".freeze, "pages/Modes.md".freeze, "pages/Options.md".freeze, "pages/Rails.md".freeze, "pages/Security.md".freeze, "pages/WAB.md".freeze]
  s.files = ["README.md".freeze, "ext/oj/extconf.rb".freeze, "pages/Advanced.md".freeze, "pages/Compatibility.md".freeze, "pages/Custom.md".freeze, "pages/Encoding.md".freeze, "pages/JsonGem.md".freeze, "pages/Modes.md".freeze, "pages/Options.md".freeze, "pages/Rails.md".freeze, "pages/Security.md".freeze, "pages/WAB.md".freeze]
  s.homepage = "http://www.ohler.com/oj".freeze
  s.licenses = ["MIT".freeze]
  s.rdoc_options = ["--title".freeze, "Oj".freeze, "--main".freeze, "README.md".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.0".freeze)
  s.rubyforge_project = "oj".freeze
  s.rubygems_version = "2.6.13".freeze
  s.summary = "A fast JSON parser and serializer.".freeze

  s.installed_by_version = "2.6.13" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rake-compiler>.freeze, ["~> 0.9"])
      s.add_development_dependency(%q<minitest>.freeze, ["~> 5"])
      s.add_development_dependency(%q<wwtd>.freeze, ["~> 0"])
    else
      s.add_dependency(%q<rake-compiler>.freeze, ["~> 0.9"])
      s.add_dependency(%q<minitest>.freeze, ["~> 5"])
      s.add_dependency(%q<wwtd>.freeze, ["~> 0"])
    end
  else
    s.add_dependency(%q<rake-compiler>.freeze, ["~> 0.9"])
    s.add_dependency(%q<minitest>.freeze, ["~> 5"])
    s.add_dependency(%q<wwtd>.freeze, ["~> 0"])
  end
end
