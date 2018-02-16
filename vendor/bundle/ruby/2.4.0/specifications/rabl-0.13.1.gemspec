# -*- encoding: utf-8 -*-
# stub: rabl 0.13.1 ruby lib

Gem::Specification.new do |s|
  s.name = "rabl".freeze
  s.version = "0.13.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Nathan Esquenazi".freeze]
  s.date = "2016-10-21"
  s.description = "General ruby templating with json, bson, xml and msgpack support".freeze
  s.email = ["nesquena@gmail.com".freeze]
  s.homepage = "https://github.com/nesquena/rabl".freeze
  s.licenses = ["MIT".freeze]
  s.rubyforge_project = "rabl".freeze
  s.rubygems_version = "2.6.11".freeze
  s.summary = "General ruby templating with json, bson, xml and msgpack support".freeze

  s.installed_by_version = "2.6.11" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<activesupport>.freeze, [">= 2.3.14"])
      s.add_development_dependency(%q<riot>.freeze, ["~> 0.12.3"])
      s.add_development_dependency(%q<rr>.freeze, ["~> 1.0.2"])
      s.add_development_dependency(%q<rake>.freeze, [">= 0"])
      s.add_development_dependency(%q<tilt>.freeze, [">= 0"])
      s.add_development_dependency(%q<oj>.freeze, [">= 0"])
      s.add_development_dependency(%q<msgpack>.freeze, ["~> 0.4.5"])
      s.add_development_dependency(%q<bson>.freeze, ["~> 1.7.0"])
      s.add_development_dependency(%q<plist>.freeze, [">= 0"])
    else
      s.add_dependency(%q<activesupport>.freeze, [">= 2.3.14"])
      s.add_dependency(%q<riot>.freeze, ["~> 0.12.3"])
      s.add_dependency(%q<rr>.freeze, ["~> 1.0.2"])
      s.add_dependency(%q<rake>.freeze, [">= 0"])
      s.add_dependency(%q<tilt>.freeze, [">= 0"])
      s.add_dependency(%q<oj>.freeze, [">= 0"])
      s.add_dependency(%q<msgpack>.freeze, ["~> 0.4.5"])
      s.add_dependency(%q<bson>.freeze, ["~> 1.7.0"])
      s.add_dependency(%q<plist>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<activesupport>.freeze, [">= 2.3.14"])
    s.add_dependency(%q<riot>.freeze, ["~> 0.12.3"])
    s.add_dependency(%q<rr>.freeze, ["~> 1.0.2"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<tilt>.freeze, [">= 0"])
    s.add_dependency(%q<oj>.freeze, [">= 0"])
    s.add_dependency(%q<msgpack>.freeze, ["~> 0.4.5"])
    s.add_dependency(%q<bson>.freeze, ["~> 1.7.0"])
    s.add_dependency(%q<plist>.freeze, [">= 0"])
  end
end
