FROM ruby:2.7.2
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
RUN mkdir /budget-beaver
WORKDIR /budget-beaver
RUN gem install bundler:1.17.2
COPY Gemfile /budget-beaver/Gemfile
COPY Gemfile.lock /budget-beaver/Gemfile.lock
RUN bundle install
COPY . /budget-beaver

EXPOSE 8888

# Start the main process
CMD ["rails", "server", "-b", "0.0.0.0"] 