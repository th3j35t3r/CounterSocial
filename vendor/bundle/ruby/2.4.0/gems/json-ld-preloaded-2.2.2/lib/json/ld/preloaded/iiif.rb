# -*- encoding: utf-8 -*-
# frozen_string_literal: true
# This file generated automatically from http://iiif.io/api/image/2/context.json
require 'json/ld'
class JSON::LD::Context
  add_preloaded("http://iiif.io/api/image/2/context.json") do
    new(processingMode: "json-ld-1.0", term_definitions: {
      "attribution" => TermDefinition.new("attribution", id: "http://iiif.io/api/presentation/2#attributionLabel"),
      "baseUriRedirect" => TermDefinition.new("baseUriRedirect", id: "http://iiif.io/api/image/2#baseUriRedirectFeature", type_mapping: "http://iiif.io/api/image/2#Feature"),
      "canonicalLinkHeader" => TermDefinition.new("canonicalLinkHeader", id: "http://iiif.io/api/image/2#canonicalLinkHeaderFeature", type_mapping: "http://iiif.io/api/image/2#Feature"),
      "cors" => TermDefinition.new("cors", id: "http://iiif.io/api/image/2#corsFeature", type_mapping: "http://iiif.io/api/image/2#Feature"),
      "dc" => TermDefinition.new("dc", id: "http://purl.org/dc/elements/1.1/", simple: true, prefix: true),
      "dcterms" => TermDefinition.new("dcterms", id: "http://purl.org/dc/terms/", simple: true, prefix: true),
      "doap" => TermDefinition.new("doap", id: "http://usefulinc.com/ns/doap#", simple: true, prefix: true),
      "exif" => TermDefinition.new("exif", id: "http://www.w3.org/2003/12/exif/ns#", simple: true, prefix: true),
      "foaf" => TermDefinition.new("foaf", id: "http://xmlns.com/foaf/0.1/", simple: true, prefix: true),
      "formats" => TermDefinition.new("formats", id: "http://iiif.io/api/image/2#format", type_mapping: "http://www.w3.org/2001/XMLSchema#string"),
      "height" => TermDefinition.new("height", id: "http://www.w3.org/2003/12/exif/ns#height", type_mapping: "http://www.w3.org/2001/XMLSchema#integer"),
      "iiif" => TermDefinition.new("iiif", id: "http://iiif.io/api/image/2#", simple: true, prefix: true),
      "jsonldMediaType" => TermDefinition.new("jsonldMediaType", id: "http://iiif.io/api/image/2#jsonLdMediaTypeFeature", type_mapping: "http://iiif.io/api/image/2#Feature"),
      "license" => TermDefinition.new("license", id: "http://purl.org/dc/terms/rights", type_mapping: "@id"),
      "logo" => TermDefinition.new("logo", id: "http://xmlns.com/foaf/0.1/logo", type_mapping: "@id"),
      "mirroring" => TermDefinition.new("mirroring", id: "http://iiif.io/api/image/2#mirroringFeature", type_mapping: "http://iiif.io/api/image/2#Feature"),
      "profile" => TermDefinition.new("profile", id: "http://usefulinc.com/ns/doap#implements", type_mapping: "@id"),
      "profileLinkHeader" => TermDefinition.new("profileLinkHeader", id: "http://iiif.io/api/image/2#profileLinkHeaderFeature", type_mapping: "http://iiif.io/api/image/2#Feature"),
      "protocol" => TermDefinition.new("protocol", id: "http://purl.org/dc/terms/conformsTo", type_mapping: "@id"),
      "qualities" => TermDefinition.new("qualities", id: "http://iiif.io/api/image/2#quality", type_mapping: "http://www.w3.org/2001/XMLSchema#string"),
      "regionByPct" => TermDefinition.new("regionByPct", id: "http://iiif.io/api/image/2#regionByPctFeature", type_mapping: "http://iiif.io/api/image/2#Feature"),
      "regionByPx" => TermDefinition.new("regionByPx", id: "http://iiif.io/api/image/2#regionByPxFeature", type_mapping: "http://iiif.io/api/image/2#Feature"),
      "regionSquare" => TermDefinition.new("regionSquare", id: "http://iiif.io/api/image/2#regionSquareFeature", type_mapping: "http://iiif.io/api/image/2#Feature"),
      "rotationArbitrary" => TermDefinition.new("rotationArbitrary", id: "http://iiif.io/api/image/2#arbitraryRotationFeature", type_mapping: "http://iiif.io/api/image/2#Feature"),
      "rotationBy90s" => TermDefinition.new("rotationBy90s", id: "http://iiif.io/api/image/2#rotationBy90sFeature", type_mapping: "http://iiif.io/api/image/2#Feature"),
      "sc" => TermDefinition.new("sc", id: "http://iiif.io/api/presentation/2#", simple: true, prefix: true),
      "scaleFactors" => TermDefinition.new("scaleFactors", id: "http://iiif.io/api/image/2#scaleFactor", type_mapping: "http://www.w3.org/2001/XMLSchema#integer"),
      "service" => TermDefinition.new("service", id: "http://rdfs.org/sioc/services#has_service", type_mapping: "@id"),
      "sizeAboveFull" => TermDefinition.new("sizeAboveFull", id: "http://iiif.io/api/image/2#sizeAboveFullFeature", type_mapping: "http://iiif.io/api/image/2#Feature"),
      "sizeByConfinedWh" => TermDefinition.new("sizeByConfinedWh", id: "http://iiif.io/api/image/2#sizeByConfinedWHFeature", type_mapping: "http://iiif.io/api/image/2#Feature"),
      "sizeByDistortedWh" => TermDefinition.new("sizeByDistortedWh", id: "http://iiif.io/api/image/2#sizeByDistortedWHFeature", type_mapping: "http://iiif.io/api/image/2#Feature"),
      "sizeByForcedWh" => TermDefinition.new("sizeByForcedWh", id: "http://iiif.io/api/image/2#sizeByForcedWHFeature", type_mapping: "http://iiif.io/api/image/2#Feature"),
      "sizeByH" => TermDefinition.new("sizeByH", id: "http://iiif.io/api/image/2#sizeByHFeature", type_mapping: "http://iiif.io/api/image/2#Feature"),
      "sizeByPct" => TermDefinition.new("sizeByPct", id: "http://iiif.io/api/image/2#sizeByPctFeature", type_mapping: "http://iiif.io/api/image/2#Feature"),
      "sizeByW" => TermDefinition.new("sizeByW", id: "http://iiif.io/api/image/2#sizeByWFeature", type_mapping: "http://iiif.io/api/image/2#Feature"),
      "sizeByWh" => TermDefinition.new("sizeByWh", id: "http://iiif.io/api/image/2#sizeByWHFeature", type_mapping: "http://iiif.io/api/image/2#Feature"),
      "sizeByWhListed" => TermDefinition.new("sizeByWhListed", id: "http://iiif.io/api/image/2#sizeByWHListedFeature", type_mapping: "http://iiif.io/api/image/2#Feature"),
      "sizes" => TermDefinition.new("sizes", id: "http://iiif.io/api/image/2#hasSize", type_mapping: "@id"),
      "supports" => TermDefinition.new("supports", id: "http://iiif.io/api/image/2#supports", type_mapping: "@vocab"),
      "svcs" => TermDefinition.new("svcs", id: "http://rdfs.org/sioc/services#", simple: true, prefix: true),
      "tiles" => TermDefinition.new("tiles", id: "http://iiif.io/api/image/2#hasTile", type_mapping: "@id"),
      "width" => TermDefinition.new("width", id: "http://www.w3.org/2003/12/exif/ns#width", type_mapping: "http://www.w3.org/2001/XMLSchema#integer"),
      "xsd" => TermDefinition.new("xsd", id: "http://www.w3.org/2001/XMLSchema#", simple: true, prefix: true)
    })
  end
end
