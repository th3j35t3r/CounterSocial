#!/usr/bin/env ruby
# encoding: UTF-8

%w(lib ext test).each do |dir|
  $LOAD_PATH.unshift File.expand_path("../../#{dir}", __FILE__)
end

require 'oj'

S = Struct.new(
               :chunk_seq,
               :youngest,
               :oldest,
               :size
               )

data = S.new(
             chunk_seq: 666000,
             youngest: nil,
             oldest: nil,
             size: 1
             )

puts Oj.dump(data, mode: :object)
