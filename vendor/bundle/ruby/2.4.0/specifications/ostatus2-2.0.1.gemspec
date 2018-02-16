# -*- encoding: utf-8 -*-
# stub: ostatus2 2.0.1 ruby lib

Gem::Specification.new do |s|
  s.name = "ostatus2".freeze
  s.version = "2.0.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Eugen Rochko".freeze]
  s.date = "2017-06-11"
  s.description = "Toolset for interacting with the OStatus2 suite of protocols".freeze
  s.email = ["eugen@zeonfederated.com".freeze]
  s.homepage = "https://github.com/tootsuite/ostatus2".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.6.11".freeze
  s.summary = "Toolset for interacting with the OStatus2 suite of protocols".freeze

  s.installed_by_version = "2.6.11" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<openssl>.freeze, ["~> 2.0"])
      s.add_runtime_dependency(%q<http>.freeze, ["~> 2.0"])
      s.add_runtime_dependency(%q<addressable>.freeze, ["~> 2.4"])
      s.add_runtime_dependency(%q<nokogiri>.freeze, ["~> 1.6"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.3"])
    else
      s.add_dependency(%q<openssl>.freeze, ["~> 2.0"])
      s.add_dependency(%q<http>.freeze, ["~> 2.0"])
      s.add_dependency(%q<addressable>.freeze, ["~> 2.4"])
      s.add_dependency(%q<nokogiri>.freeze, ["~> 1.6"])
      s.add_dependency(%q<bundler>.freeze, ["~> 1.3"])
    end
  else
    s.add_dependency(%q<openssl>.freeze, ["~> 2.0"])
    s.add_dependency(%q<http>.freeze, ["~> 2.0"])
    s.add_dependency(%q<addressable>.freeze, ["~> 2.4"])
    s.add_dependency(%q<nokogiri>.freeze, ["~> 1.6"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.3"])
  end
end
