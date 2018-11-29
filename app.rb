require 'sinatra'
# require "sinatra/cookies"

class Thermostat < Sinatra::Base

  get '/' do
     File.read(File.join('public', 'index.html'))
  end

  post '/city' do
    # cookies[:city] = params[:new_city]

    redirect to('/')
  end

  run! if app_file == $0

end
