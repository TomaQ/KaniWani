class Hash
  def select_keys(*args)
    select { |k ,v| args.include?(k) }
  end
end