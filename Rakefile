require 'tmpdir'
require 'fileutils'

namespace :sync do
  task :i18n do
    modules = ['app', 'local', 'meta', 'soundcloud', 'youtube']

    Dir.mktmpdir("i18n") do |dir|
      data_dir     = File.join(__dir__, '_data')
      translations = File.join(dir, 'i18n', 'translations')

      Dir.chdir(dir) do
        `git clone https://github.com/daplayer/i18n`

        Dir.chdir(translations) do
          modules.each do |mod|
            FileUtils.cp_r(File.join(translations, mod),
                           File.join(data_dir, mod))
          end
        end
      end
    end
  end

  task :api do
    def camel_case(string)
      string.sub!(/^[a-z\d]*/) { |match| match.capitalize }
      string.gsub!(/(?:_|(\/))([a-z\d]*)/i) { "#{$1}#{$2.capitalize}" }
      string.gsub!('/'.freeze, '.'.freeze)
      string
    end

    def github(file)
      "https://github.com/daplayer/daplayer/tree/master/#{file}"
    end

    class_template = File.read('_templates/class.md')
    index_template = File.read('_templates/index.md')

    files   = []
    folder  = File.expand_path(ENV['SOURCE'])
    pattern = File.join(folder, 'app/**/*.js')
    binary  = File.join(folder, 'node_modules/.bin/documentation')

    Dir.glob(pattern).each do |file|
      relative_file = file[(file.index('app'))..-1]
      components    = relative_file.split('/')
      dest_dir      = File.join('documentation', 'api', components[1..-2].join('/'))
      dest_file     = File.join(dest_dir, components[-1]).sub('.js', '.md')
      inner_path    = components[1..-1].join('/')

      next if ['menu.js', 'core_ext.js', 'jquery_ext.js',
               'helpers.js', 'mappers.js', 'initializer.js'].include?(components[-1])

      FileUtils.mkdir_p(dest_dir)

      puts "Generating documentation for #{relative_file}..."
      `#{binary} build #{file} -f md -o #{dest_file}.nil --shallow`

      File.open(dest_file, 'w') do |f|
        values = {
          klass:         camel_case(components[-1].sub('.js', '')),
          github_path:   github(relative_file),
          relative_file: relative_file
        }

        f.puts(class_template % values)

        File.foreach(dest_file + ".nil") do |line|
          if line.start_with?('# ')
            klass = if inner_path.start_with?('ui')
              camel_case(inner_path.sub('.js', ''))
            else
              camel_case(line[2..-2])
            end

            f.puts "# The `#{klass}` class\n"
            f.puts "<hr>"

            files << [klass, inner_path]
          elsif line.start_with?('## ')
            f.puts '<hr>'
            f.puts line
          else
            f.puts line
          end
        end
      end

      File.unlink(dest_file + ".nil")
    end

    File.open('documentation/api/index.md', 'w') do |f|
      links = files.map do |(klass, path)|
        "* [#{klass}](#{path.sub('.js', '.html')})"
      end

      f.puts(index_template % { links: links.join("\n")})
    end
  end
end
