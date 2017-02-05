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
end
