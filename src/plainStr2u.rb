#!/usr/bin/env ruby

if __FILE__ == $0
  inFile = File.new(ARGV[0])
  r = ""
  inFile.each do |line|
    line.split('').each do |c|
      if c == ' '
        r += "\\u00a0"
      else
        r += "\\u" + "%4.4x" % c.ord
      end
    end
    r += "\n"
  end
  puts r
end
