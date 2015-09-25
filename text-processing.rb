require 'rubygems'
require 'curb'

http = Curl::Easy.http_post("http://text-processing.com/api/tag/",
                         Curl::PostField.content('text', 'hello world'))
puts http.body_str
