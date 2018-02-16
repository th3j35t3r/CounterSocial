# -*- encoding: utf-8 -*-
# stub: json-ld 2.1.5 ruby lib

Gem::Specification.new do |s|
  s.name = "json-ld".freeze
  s.version = "2.1.5"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Gregg Kellogg".freeze]
  s.date = "2017-07-10"
  s.description = "JSON::LD parses and serializes JSON-LD into RDF and implements expansion, compaction and framing API interfaces.".freeze
  s.email = "public-linked-json@w3.org".freeze
  s.executables = ["jsonld".freeze]
  s.files = ["bin/jsonld".freeze]
  s.homepage = "http://github.com/ruby-rdf/json-ld".freeze
  s.licenses = ["Unlicense".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.2.2".freeze)
  s.rubyforge_project = "json-ld".freeze
  s.rubygems_version = "2.6.11".freeze
  s.summary = "JSON-LD reader/writer for Ruby.".freeze

  s.installed_by_version = "2.6.11" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<rdf>.freeze, ["~> 2.2"])
      s.add_runtime_dependency(%q<multi_json>.freeze, ["~> 1.12"])
      s.add_development_dependency(%q<linkeddata>.freeze, ["~> 2.2"])
      s.add_development_dependency(%q<jsonlint>.freeze, ["~> 0.2"])
      s.add_development_dependency(%q<oj>.freeze, ["~> 2.17"])
      s.add_development_dependency(%q<yajl-ruby>.freeze, ["~> 1.2"])
      s.add_development_dependency(%q<rdf-isomorphic>.freeze, ["~> 2.0"])
      s.add_development_dependency(%q<rdf-spec>.freeze, ["~> 2.2"])
      s.add_development_dependency(%q<rdf-trig>.freeze, ["~> 2.0"])
      s.add_development_dependency(%q<rdf-turtle>.freeze, ["~> 2.0"])
      s.add_development_dependency(%q<rdf-vocab>.freeze, ["~> 2.0"])
      s.add_development_dependency(%q<rdf-xsd>.freeze, ["~> 2.0"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 3.5"])
      s.add_development_dependency(%q<rspec-its>.freeze, ["~> 1.2"])
      s.add_development_dependency(%q<yard>.freeze, ["~> 0.8"])
    else
      s.add_dependency(%q<rdf>.freeze, ["~> 2.2"])
      s.add_dependency(%q<multi_json>.freeze, ["~> 1.12"])
      s.add_dependency(%q<linkeddata>.freeze, ["~> 2.2"])
      s.add_dependency(%q<jsonlint>.freeze, ["~> 0.2"])
      s.add_dependency(%q<oj>.freeze, ["~> 2.17"])
      s.add_dependency(%q<yajl-ruby>.freeze, ["~> 1.2"])
      s.add_dependency(%q<rdf-isomorphic>.freeze, ["~> 2.0"])
      s.add_dependency(%q<rdf-spec>.freeze, ["~> 2.2"])
      s.add_dependency(%q<rdf-trig>.freeze, ["~> 2.0"])
      s.add_dependency(%q<rdf-turtle>.freeze, ["~> 2.0"])
      s.add_dependency(%q<rdf-vocab>.freeze, ["~> 2.0"])
      s.add_dependency(%q<rdf-xsd>.freeze, ["~> 2.0"])
      s.add_dependency(%q<rspec>.freeze, ["~> 3.5"])
      s.add_dependency(%q<rspec-its>.freeze, ["~> 1.2"])
      s.add_dependency(%q<yard>.freeze, ["~> 0.8"])
    end
  else
    s.add_dependency(%q<rdf>.freeze, ["~> 2.2"])
    s.add_dependency(%q<multi_json>.freeze, ["~> 1.12"])
    s.add_dependency(%q<linkeddata>.freeze, ["~> 2.2"])
    s.add_dependency(%q<jsonlint>.freeze, ["~> 0.2"])
    s.add_dependency(%q<oj>.freeze, ["~> 2.17"])
    s.add_dependency(%q<yajl-ruby>.freeze, ["~> 1.2"])
    s.add_dependency(%q<rdf-isomorphic>.freeze, ["~> 2.0"])
    s.add_dependency(%q<rdf-spec>.freeze, ["~> 2.2"])
    s.add_dependency(%q<rdf-trig>.freeze, ["~> 2.0"])
    s.add_dependency(%q<rdf-turtle>.freeze, ["~> 2.0"])
    s.add_dependency(%q<rdf-vocab>.freeze, ["~> 2.0"])
    s.add_dependency(%q<rdf-xsd>.freeze, ["~> 2.0"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.5"])
    s.add_dependency(%q<rspec-its>.freeze, ["~> 1.2"])
    s.add_dependency(%q<yard>.freeze, ["~> 0.8"])
  end
end
