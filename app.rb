require 'sinatra'

class Thermostat < Sinatra::Base

  get '/' do
     File.read(File.join('public', 'index.html'))
  end

  run! if app_file == $0

end
