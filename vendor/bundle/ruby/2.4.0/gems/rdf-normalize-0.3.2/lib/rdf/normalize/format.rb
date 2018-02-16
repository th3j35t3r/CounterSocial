require 'rdf/nquads'

module RDF::Normalize
  class Format < RDF::Format
    content_encoding 'utf-8'

    # It reads like normal N-Quads
    reader { RDF::NQuads::Reader}
    writer { RDF::Normalize::Writer }
  end
end
