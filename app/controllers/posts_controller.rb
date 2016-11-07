class PostsController < ApplicationController
  def index
    @post = Post.new
  end

  def case
  end

  def create
    post = Post.new(post_params)
    if post.save!
      render :final
    else
      render :index
    end
  end

  def cbre
  end

  def final
  end

  private

  def post_paramsname
    params.require(:post).permit(:gender, :echelon, :age,:favorite,:mobile,:email)
  end
end