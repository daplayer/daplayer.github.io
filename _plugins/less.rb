require 'less'

module Jekyll
  class LessConverter < Converter
    def matches(ext)
      ext =~ /^\.less$/i
    end

    def output_ext(ext)
      ".css"
    end

    def convert(content)
      content.gsub!("---", "")
      parser = Less::Parser.new
      parser.parse(content).to_css(compress: true)
    end
  end
end
