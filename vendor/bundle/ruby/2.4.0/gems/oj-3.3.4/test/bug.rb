#!/usr/bin/env ruby
# encoding: UTF-8

%w(lib ext test).each do |dir|
  $LOAD_PATH.unshift File.expand_path("../../#{dir}", __FILE__)
end

#require 'rails'
#require 'active_support/json'
require 'oj'

#Oj.optimize_rails

#puts JSON.parse('{"a":1}', symbolize_names: true)

#Oj.mimic_JSON()

#puts Oj.dump({nan: Float::NAN}, mode: :compat, nan: :raise)

#puts({nan: Float::NAN}.to_json)

puts Oj.dump(NoMethodError.new, mode: :custom)
