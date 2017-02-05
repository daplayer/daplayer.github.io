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
      destination = File.expand_path(File.join(__dir__, '..', 'css', 'main.css'))

      content.gsub!("---", "")
      parser = Less::Parser.new
      output = parser.parse(content).to_css(compress: true)

      File.open(destination, 'w') do |f|
        f.write output
      end

      return output
    end
  end
end
